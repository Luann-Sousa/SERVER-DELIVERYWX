import { getCustomRepository } from 'typeorm';
import { RepositoriesCarr } from '../../repositories/RepositorieCarr';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';

//tipagem
interface ICarrUpdatedProps {
  id: string;
  quantity: number;
  resumo: number;
  toti: number;
  user_id: string;
  product_id: string;
}
class ServicesUpdatedCarr {
  async execute({
    id,
    quantity,
    resumo,
    toti,
    user_id,
    product_id,
  }: ICarrUpdatedProps) {
    const carrRepository = getCustomRepository(RepositoriesCarr);
    const productRepositry = getCustomRepository(RepositoriesProduct);

    const carrs = await carrRepository.findOne(id);

    if (!carrs) {
      return new Error(
        'Não possui esse carrinho em nosso sitema tente outro !',
      );
    }

    const productAllExits = await productRepositry.findOne(product_id);

    const resultStock = productAllExits.stock - quantity;

    productAllExits.stock = resultStock ? resultStock : productAllExits.stock;
    await productRepositry.save(productAllExits);

    carrs.quantity = resultStock ? resultStock : carrs.quantity;
    carrs.resumo = resumo ? resumo : carrs.resumo;
    carrs.toti = toti ? toti : carrs.toti;
    carrs.user_id = user_id ? user_id : carrs.user_id;
    carrs.product_id = product_id ? product_id : carrs.product_id;
    const result = await carrRepository.save(carrs);

    return { result };
  }
}

export { ServicesUpdatedCarr };

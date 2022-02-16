import { getCustomRepository, getRepository } from 'typeorm';
import { RepositoriesCarr } from '../../repositories/RepositorieCarr';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';
import { Carr } from '../../entities/Carr';

interface ICarrProps {
  quantity: number;
  resumo: number;
  toti: number;
  user_id: string;
  product_id: string;
}

class ServicesCreateCarr {
  async execute({ quantity, resumo, toti, product_id, user_id }: ICarrProps) {
    const carrReposotry = getCustomRepository(RepositoriesCarr);
    const productRepositry = getCustomRepository(RepositoriesProduct);

    const productAllExits = await productRepositry.findOne(product_id);

    const resultStock = productAllExits.stock - quantity;

    productAllExits.stock = resultStock ? resultStock : productAllExits.stock;
    await productRepositry.save(productAllExits);

    const carr = carrReposotry.create({
      quantity,
      resumo,
      toti,
      user_id,
      product_id,
    });

    await carrReposotry.save(carr);

    return carr;
  }
}

export { ServicesCreateCarr };

import { getCustomRepository } from 'typeorm';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';

//tipagem
interface IProductProps {
  name: string;
  description: string;
  price: number;
  quantity: number;
  user_id: string;
}

class ServiceProductCreate {
  async execute({
    name,
    description,
    price,
    quantity,
    user_id,
  }: IProductProps) {
    const productService = getCustomRepository(RepositoriesProduct);

    const productCreate = await productService.create({
      name,
      description,
      price,
      quantity,
      user_id,
    });

    const result = await productService.save(productCreate);

    return { result };
  }
}
export { ServiceProductCreate };

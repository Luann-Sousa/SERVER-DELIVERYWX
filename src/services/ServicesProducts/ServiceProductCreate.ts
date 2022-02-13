import { getCustomRepository } from 'typeorm';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';

//tipagem
export interface IProductProps {
  name?: string;
  categories?: string;
  description?: string;
  price?: number;
  stock?: number;
  delivery_fee?: number;
  delivery_time?: string;
  assessment?: number;
  user_id?: string;
}

class ServiceProductCreate {
  async execute({
    name,
    categories,
    description,
    price,
    stock,
    delivery_fee,
    delivery_time,
    assessment,
    user_id,
  }: IProductProps) {
    const productService = getCustomRepository(RepositoriesProduct);

    const productCreate = productService.create({
      name,
      categories,
      description,
      price,
      stock,
      delivery_fee,
      delivery_time,
      assessment,
      user_id,
    });

    const result = await productService.save(productCreate);

    return { result };
  }
}
export { ServiceProductCreate };

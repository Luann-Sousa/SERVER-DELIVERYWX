import { getCustomRepository } from 'typeorm';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';

//tipagem
export interface IProductProps {
  name?: string;
  file: string;
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
    file,
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
      file,
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

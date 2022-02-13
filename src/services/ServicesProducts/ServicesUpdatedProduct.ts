import { getCustomRepository } from 'typeorm';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';

//tipagem
interface IProducUpdatedProps {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  user_id: string;
}
class ServicesUpdatedProduct {
  async execute({
    id,
    name,
    description,
    price,
    stock,
    user_id,
  }: IProducUpdatedProps) {
    const userRepository = getCustomRepository(RepositoriesProduct);

    const products = await userRepository.findOne(id);

    if (!products) {
      return new Error('Não possui esse usário em nosso sitema tente outro !');
    }

    products.name = name ? name : products.name;
    products.description = description ? description : products.description;
    products.price = price ? price : products.price;
    products.stock = stock ? stock : products.stock;
    products.user_id = user_id ? user_id : products.user_id;
    const result = await userRepository.save(products);

    return { result };
  }
}

export { ServicesUpdatedProduct };

import { getCustomRepository } from 'typeorm';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';

interface IProductProps {
  id_product: string;
}

class ServiceDeletedProduct {
  async execute({ id_product }: IProductProps) {
    const repositorieDeleted = getCustomRepository(RepositoriesProduct);

    const productAllExists = await repositorieDeleted.findOne(id_product);

    if (!productAllExists) {
      return new Error('Não existe esse produto cadastrado tente outro !');
    }
    const productDeleted = await repositorieDeleted.delete(id_product);

    return productDeleted;
  }
}

export { ServiceDeletedProduct };

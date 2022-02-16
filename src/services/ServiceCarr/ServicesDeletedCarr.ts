import { getCustomRepository } from 'typeorm';
import { RepositoriesCarr } from '../../repositories/RepositorieCarr';

interface IProductProps {
  id_carr: string;
}

class ServicesDeletedCarr {
  async execute({ id_carr }: IProductProps) {
    const repositorieDeleted = getCustomRepository(RepositoriesCarr);

    const productAllExists = await repositorieDeleted.findOne(id_carr);

    if (!productAllExists) {
      return new Error('Não existe esse produto cadastrado tente outro !');
    }
    const carrtDeleted = await repositorieDeleted.delete(id_carr);

    return carrtDeleted;
  }
}

export { ServicesDeletedCarr };

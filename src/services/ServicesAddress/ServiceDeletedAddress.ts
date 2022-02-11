import { getCustomRepository } from 'typeorm';
import { RepositorieAddress } from '../../repositories/RepositoriesAddress';

interface IUserProps {
  id_addres: string;
}

class ServiceDeletedAddres {
  async execute({ id_addres }: IUserProps) {
    const repositorieDeleted = getCustomRepository(RepositorieAddress);

    const userAllExists = repositorieDeleted.findOne(id_addres);

    if (!userAllExists) {
      throw new Error('Não existe esse endereço cadastrado tente outro !');
    }
    const userDeleted = await repositorieDeleted.delete(id_addres);

    return userDeleted;
  }
}

export { ServiceDeletedAddres };

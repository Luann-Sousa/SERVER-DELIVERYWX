import { getCustomRepository } from 'typeorm';
import { RepositorieAddress } from '../../repositories/RepositoriesAddress';

interface IUserProps {
  id_addres: string;
}

class ServiceDeletedAddres {
  async execute({ id_addres }: IUserProps) {
    const repositorieDeleted = getCustomRepository(RepositorieAddress);

    const userDeleted = await repositorieDeleted.delete(id_addres);

    return userDeleted;
  }
}

export { ServiceDeletedAddres };

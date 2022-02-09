import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

class GetAllUsersService {
  async execute() {
    const usersRepositorie = getRepository(User);

    const requests = await usersRepositorie.find();

    if (!requests) {
      throw new Error(
        'Não exite  usuário nenhum usuário cadastrado no sistema, tente mais tarde !',
      );
    }

    return requests;
  }
}

export { GetAllUsersService };

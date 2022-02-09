import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

class GetOneUserService {
  async execute(id_user: string) {
    const user = getRepository(User);

    const resultUser = await user.findOne(id_user);

    if (!resultUser) {
      throw new Error(
        'Não exite esse usuário em nosso sistema tente mais tarde !',
      );
    }

    return resultUser;
  }
}

export { GetOneUserService };

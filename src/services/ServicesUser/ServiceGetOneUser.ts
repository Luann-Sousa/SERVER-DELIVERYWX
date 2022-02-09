import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

class GetOneUserService {
  async execute(id_user: string) {
    const user = getRepository(User);

    const resultUser = await user.findOne(id_user);

    return resultUser;
  }
}

export { GetOneUserService };

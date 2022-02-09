import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../repositories/RepositoriesUser';

interface IUserServices {
  name: string;
  username: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  file: string;
  date_nasc: string;
}

class UserServices {
  async handle({
    name,
    username,
    email,
    password,
    cpf,
    phone,
    file,
    date_nasc,
  }: IUserServices) {
    const userRepository = getCustomRepository(UserRepository);

    const userEmailAllexists = await userRepository.findOne({
      email,
    });

    if (userEmailAllexists) {
      throw new Error('Email já possui em nossa sistema !');
    }
    const createUser = userRepository.create({
      name,
      username,
      email,
      password,
      cpf,
      phone,
      file,
      date_nasc,
    });

    await userRepository.save(createUser);

    return { createUser };
  }
}

export { UserServices };

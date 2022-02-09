import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/RepositoriesUser';

interface IUserProps {
  name: string;
  username: string;
  email: string;
  password: string;
  cpf: string;
  phone: string;
  file: string;
  nivel_user: number;
  date_nasc: string;
}

class CreateUserService {
  async execute({
    name,
    username,
    email,
    password,
    cpf,
    phone,
    file,
    nivel_user,
    date_nasc,
  }: IUserProps) {
    const useReposotry = getCustomRepository(UserRepositorie);

    const useremailAllexists = await useReposotry.findOne({
      email,
    });

    if (useremailAllexists) {
      throw new Error('Já possui um usuário com este email tente outro !');
    }

    const user = useReposotry.create({
      name,
      username,
      email,
      password,
      cpf,
      phone,
      file,
      nivel_user,
      date_nasc,
    });

    await useReposotry.save(user);

    return user;
  }
}

export { CreateUserService };

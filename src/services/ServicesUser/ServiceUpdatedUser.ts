import { getCustomRepository } from 'typeorm';
import { UserRepositorie } from '../../repositories/RepositoriesUser';
// import { hash } from 'bcryptjs';
interface IUserProps {
  id: string;
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

class UpdateUserService {
  async execute({
    id,
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
    const userRepositry = getCustomRepository(UserRepositorie);

    const user = await userRepositry.findOne(id);

    if (!user) {
      return new Error('Não possui esse usário em nosso sitema tente outro !');
    }
    // const passwordHash = await hash(password, 8);
    user.name = name ? name : user.name;
    user.username = username ? username : user.username;
    user.email = email ? email : user.email;
    user.password = password ? password : user.password;
    user.cpf = cpf ? cpf : user.cpf;
    user.file = file ? file : user.file;
    user.nivel_user = nivel_user ? nivel_user : user.nivel_user;
    user.phone = phone ? phone : user.phone;
    user.date_nasc = date_nasc ? date_nasc : user.date_nasc;
    return await userRepositry.save(user);
  }
}

export { UpdateUserService };

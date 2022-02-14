import { Request, Response } from 'express';
import { CreateUserService } from '../../services/ServicesUser/SeviceCreateUser';

class UserCreateControler {
  async handle(request: Request, response: Response) {
    const {
      name,
      username,
      email,
      password,
      cpf,
      phone,
      nivel_user,
      date_nasc,
    } = request.body;

    const createUser = new CreateUserService();
    const { filename: file } = request.file;
    const user = await createUser.execute({
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
    return response.status(201).json({
      error: false,
      user: user,
    });
  }
}

export { UserCreateControler };

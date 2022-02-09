import { Request, Response } from 'express';
import { UserServices } from '../../services/ServicesUser';

class UserCreateControler {
  async handle(request: Request, response: Response) {
    const { name, username, email, password, cpf, phone, file, date_nasc } =
      request.body;
    const createUser = new UserServices();

    const user = await createUser.execute({
      name,
      username,
      email,
      password,
      cpf,
      phone,
      file,
      date_nasc,
    });
    return response.status(201).json({
      error: false,
      user: user,
    });
  }
}

export { UserCreateControler };

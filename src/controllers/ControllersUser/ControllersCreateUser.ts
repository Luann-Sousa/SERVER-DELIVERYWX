import { Request, Response } from 'express';
import { CreateUserService } from '../../services/ServicesUser/SeviceCreateUser';

class UserCreateControler {
  async handle(request: Request, response: Response) {
    console.log('kkkkk');

    const {
      name,
      username,
      email,
      password,
      cpf,
      phone,
      file,
      nivel_user,
      date_nasc,
    } = request.body;
    console.log('req', phone);
    const createUser = new CreateUserService();

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

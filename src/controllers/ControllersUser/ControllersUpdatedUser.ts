import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/ServicesUser/ServiceUpdatedUser';

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
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

    const userService = new UpdateUserService();

    const user = await userService.execute({
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
    });
    if (user instanceof Error) {
      return response.json(user.message);
    }

    return response.status(200).json({
      error: false,
      messeger: 'Usuário foi atualizada com sucesso!',
      user: user,
    });
  }
}

export { UpdateUserController };

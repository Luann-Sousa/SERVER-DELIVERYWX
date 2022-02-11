import { Request, Response } from 'express';
import { ServiceDeletedAddres } from '../../services/ServicesAddress/ServiceDeletedAddress';

class ControllersDeletedAddres {
  async handle(request: Request, response: Response) {
    const { id_addres } = request.params;

    const userDeleted = new ServiceDeletedAddres();

    const user = await userDeleted.execute({ id_addres });

    if (user instanceof Error) {
      return response.json(user.message);
    }

    return response.status(200).json({
      status: 200,
      messeger: 'Usuário foi excluido com sucesso!',
      user: user,
    });
  }
}
export { ControllersDeletedAddres };

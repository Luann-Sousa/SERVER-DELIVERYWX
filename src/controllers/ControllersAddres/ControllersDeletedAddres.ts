import { Request, Response } from 'express';
import { ServiceDeletedAddres } from '../../services/ServicesAddress/ServiceDeletedAddress';

class ControllersDeletedAddres {
  async handle(request: Request, response: Response) {
    const { id_addres } = request.params;

    const userDeleted = new ServiceDeletedAddres();

    const user = userDeleted.execute({ id_addres });

    return response.status(200).json({
      status: 200,
      user,
    });
  }
}
export { ControllersDeletedAddres };

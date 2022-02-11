import { Request, Response } from 'express';
import { ServiceGetOneCardUsers } from '../../services/ServicesCard/ServiceGetOneCardUsers';

class ControllersGetOneCardUsers {
  async handle(request: Request, response: Response) {
    const service = new ServiceGetOneCardUsers();

    const result = await service.execute();

    return response.status(200).json({
      status: 200,
      address: result,
    });
  }
}

export { ControllersGetOneCardUsers };

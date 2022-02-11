import { Request, Response } from 'express';
import { GetAlllCardService } from '../../services/ServicesCard/ServiceGetAllCard';

class ControllersGetAllCardUsers {
  async handle(request: Request, response: Response) {
    const service = new GetAlllCardService();

    const result = await service.execute();

    return response.status(200).json({
      status: 200,
      address: result,
    });
  }
}

export { ControllersGetAllCardUsers };

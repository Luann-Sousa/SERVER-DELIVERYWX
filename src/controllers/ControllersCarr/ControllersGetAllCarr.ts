import { Request, Response } from 'express';
import { ServicesGetAllCarr } from '../../services/ServiceCarr/ServicesGetAllCarr';

class ControllersGetAllCarr {
  async handle(request: Request, response: Response) {
    const service = new ServicesGetAllCarr();

    const result = await service.execute();

    return response.status(200).json({
      status: 200,
      carrs: result,
    });
  }
}

export { ControllersGetAllCarr };

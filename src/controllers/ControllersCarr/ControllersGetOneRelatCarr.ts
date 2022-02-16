import { Request, Response } from 'express';
import { SevicesGetOneRelatCarr } from '../../services/ServiceCarr/SevicesGetOneRelatCarr';

class ControllersGetOneRelatCarr {
  async handle(request: Request, response: Response) {
    const service = new SevicesGetOneRelatCarr();

    const result = await service.execute();

    return response.status(200).json({
      status: 200,
      carrs: result,
    });
  }
}

export { ControllersGetOneRelatCarr };

import { Request, Response } from 'express';
import { ServiceGetOneRelatCompany } from '../../services/ServicesCompany/ServiceGetOneRelatCompany';

class ControllersGetOneRelatCompany {
  async handle(request: Request, response: Response) {
    const companytController = new ServiceGetOneRelatCompany();

    const result = await companytController.execute();

    return response.status(200).json({
      status: 200,
      companys: result,
    });
  }
}

export { ControllersGetOneRelatCompany };

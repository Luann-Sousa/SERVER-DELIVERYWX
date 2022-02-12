import { Request, Response } from 'express';
import { ServiceGetAlllCardService } from '../../services/ServicesProducts/ServicesGetAllProduct';

class ControllersGetAllProduct {
  async handle(request: Request, response: Response) {
    const controllersGetAll = new ServiceGetAlllCardService();

    const result = await controllersGetAll.execute();

    return response.status(200).json({
      status: 200,
      address: result,
    });
  }
}

export { ControllersGetAllProduct };

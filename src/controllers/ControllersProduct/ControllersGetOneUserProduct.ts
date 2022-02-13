import { Request, Response } from 'express';
import { ServiceGetOneUserProduct } from '../../services/ServicesProducts/ServiceGetOneUserProduct';

class ControllersGetOneUserProduct {
  async handle(request: Request, response: Response) {
    const controllersProduct = new ServiceGetOneUserProduct();

    const result = await controllersProduct.execute();

    return response.status(200).json({
      status: 200,
      products: result,
    });
  }
}

export { ControllersGetOneUserProduct };

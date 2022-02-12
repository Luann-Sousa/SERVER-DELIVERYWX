import { Request, Response } from 'express';
import { ServiceProductCreate } from '../../services/ServicesProducts/ServiceProductCreate';

class ControllersCreateProduct {
  async handle(request: Request, response: Response) {
    const { name, description, price, quantity, user_id } = request.body;
    const controllersProduct = new ServiceProductCreate();

    const result = await controllersProduct.execute({
      name,
      description,
      price,
      quantity,
      user_id,
    });

    if (result instanceof Error) {
      return new Error(
        'Ops!, houve algum problema em criar produto consulte admin ou tente mais tarde!',
      );
    }

    return response.status(200).json({
      status: 2000,
      products: result,
    });
  }
}

export { ControllersCreateProduct };

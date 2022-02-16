import { Request, Response } from 'express';
import { ServicesCreateCarr } from '../../services/ServiceCarr/ServicesCreateCarr';

class ControllersCreateCarr {
  async handle(request: Request, response: Response) {
    const { user_id, product_id } = request.body;

    const createCarr = new ServicesCreateCarr();

    const result = await createCarr.execute({
      user_id,
      product_id,
    });
    if (result instanceof Error) {
      new Error(
        'Error em adicionar seu produto ao carrinho tente mais tarde !',
      );
    }
    return response.status(201).json({
      status: 200,
      carrs: result,
    });
  }
}

export { ControllersCreateCarr };

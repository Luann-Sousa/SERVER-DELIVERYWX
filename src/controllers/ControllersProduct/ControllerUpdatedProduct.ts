import { Request, Response } from 'express';
import { ServicesUpdatedProduct } from '../../services/ServicesProducts/ServicesUpdatedProduct';

class ControllerUpdatedProduct {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, price, stock, user_id } = request.body;

    const userService = new ServicesUpdatedProduct();

    const result = await userService.execute({
      id,
      name,
      description,
      price,
      stock,
      user_id,
    });
    if (result instanceof Error) {
      return response.json(result.message);
    }

    return response.status(200).json({
      status: 200,
      messeger: 'Produto foi atualizada com sucesso!',
      products: result,
    });
  }
}

export { ControllerUpdatedProduct };

import { Request, Response } from 'express';
import { ServicesUpdatedCarr } from '../../services/ServiceCarr/ServicesUpdatedCarr';

class ControllersUpdatedCarr {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { quantity, resumo, toti, user_id, product_id } = request.body;

    const userService = new ServicesUpdatedCarr();

    const result = await userService.execute({
      id,
      quantity,
      resumo,
      toti,
      user_id,
      product_id,
    });
    if (result instanceof Error) {
      return response.json(result.message);
    }

    return response.status(200).json({
      status: 200,
      messeger: 'Carrinho foi atualizada com sucesso!',
      carrs: result,
    });
  }
}

export { ControllersUpdatedCarr };

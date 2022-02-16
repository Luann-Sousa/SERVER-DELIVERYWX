import { Request, Response } from 'express';
import { ServicesDeletedCarr } from '../../services/ServiceCarr/ServicesDeletedCarr';

class ControllersUpdatedCarr {
  async handle(request: Request, response: Response) {
    const { id_carr } = request.params;

    const carrService = new ServicesDeletedCarr();

    const result = await carrService.execute({
      id_carr,
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

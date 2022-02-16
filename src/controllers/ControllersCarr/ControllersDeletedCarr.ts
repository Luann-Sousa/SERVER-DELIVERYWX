import { Request, Response } from 'express';
import { ServicesDeletedCarr } from '../../services/ServiceCarr/ServicesDeletedCarr';

class ControllersDeletedCarr {
  async handle(request: Request, response: Response) {
    const { id_carr } = request.params;

    const carrDeleted = new ServicesDeletedCarr();
    const carr = await carrDeleted.execute({ id_carr });

    if (carr instanceof Error) {
      return response.json(carr.message);
    }

    return response.status(200).json({
      status: 200,
      messeger: 'Carrinho foi excluido com sucesso!',
      carr: carr,
    });
  }
}
export { ControllersDeletedCarr };

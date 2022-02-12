import { Request, Response } from 'express';
import { ServiceDeletedProduct } from '../../services/ServicesProducts/ServiceDeletedProduct';

class ControllersDeletedAddres {
  async handle(request: Request, response: Response) {
    const { id_product } = request.params;

    const productDeleted = new ServiceDeletedProduct();

    const product = await productDeleted.execute({ id_product });

    if (product instanceof Error) {
      return response.json(product.message);
    }

    return response.status(200).json({
      status: 200,
      messeger: 'Produto foi excluido com sucesso!',
      product: product,
    });
  }
}
export { ControllersDeletedAddres };

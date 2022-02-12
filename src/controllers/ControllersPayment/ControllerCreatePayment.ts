import { Request, Response } from 'express';
import { ServiceCreatePayment } from '../../services/ServicesPayment/ServiceCreatePayment';

class ControllersCreateCardUsers {
  async handle(request: Request, response: Response) {
    const {
      obeservation,
      type_payment,
      name_expresso_card,
      date_card,
      cvv_card,
      quantity,
      resumo,
      toti,
      card_id,
      user_id,
    } = request.body;

    const paymentController = new ServiceCreatePayment();

    const result = await paymentController.execute({
      obeservation,
      type_payment,
      name_expresso_card,
      date_card,
      cvv_card,
      quantity,
      resumo,
      toti,
      card_id,
      user_id,
    });
    if (result instanceof Error) {
      new Error('Error em fazer seu pagamento tente mais tarde !');
    }
    return response.status(201).json({
      status: 200,
      payments: result,
    });
  }
}

export { ControllersCreateCardUsers };

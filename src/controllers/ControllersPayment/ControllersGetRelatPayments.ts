import { Request, Response } from 'express';
import { ServiceGetRelatPayment } from '../../services/ServicesPayment/ServiceGetRelatPayment';

class ControllersGetRelatPayments {
  async handle(request: Request, response: Response) {
    const paymentController = new ServiceGetRelatPayment();

    const result = await paymentController.execute();

    return response.status(200).json({
      status: 200,
      payments: result,
    });
  }
}

export { ControllersGetRelatPayments };

import { Request, Response } from 'express';
import { ServiceGetAllPayment } from '../../services/ServicesPayment/ServiceGetAllPayment';

class ControllersGetAllPayment {
  async handle(request: Request, response: Response) {
    const paymentController = new ServiceGetAllPayment();

    const result = await paymentController.execute();

    return response.status(200).json({
      status: 200,
      payments: result,
    });
  }
}

export { ControllersGetAllPayment };

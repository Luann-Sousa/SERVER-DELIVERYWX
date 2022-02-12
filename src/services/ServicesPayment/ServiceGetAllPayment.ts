import { getRepository } from 'typeorm';
import { Payments } from '../../entities/Payment';

class ServiceGetAllPayment {
  async execute() {
    const paymentsRepositorie = getRepository(Payments);

    const payments = await paymentsRepositorie.find();

    return payments;
  }
}

export { ServiceGetAllPayment };

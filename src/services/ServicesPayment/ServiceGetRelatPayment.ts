import { getRepository } from 'typeorm';
import { Payments } from '../../entities/Payment';

class ServiceGetRelatPayment {
  async execute() {
    const paymentsRepositorie = getRepository(Payments);

    const payments = await paymentsRepositorie.find({
      relations: ['user', 'card', 'product'],
    });

    return payments;
  }
}

export { ServiceGetRelatPayment };

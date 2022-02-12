import { getRepository } from 'typeorm';
import { Payments } from '../../entities/Payment';

class ServiceGetAllPayment {
  async execute() {
    const productRepositorie = getRepository(Payments);

    const products = await productRepositorie.find({
      relations: ['user'],
    });

    console.log(products);

    return products;
  }
}

export { ServiceGetAllPayment };

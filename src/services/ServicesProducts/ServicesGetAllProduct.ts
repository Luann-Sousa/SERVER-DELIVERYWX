import { getRepository } from 'typeorm';
import { Products } from '../../entities/Products';

class ServiceGetAlllCardService {
  async execute() {
    const productRepositorie = getRepository(Products);

    const products = await productRepositorie.find();

    return products;
  }
}

export { ServiceGetAlllCardService };

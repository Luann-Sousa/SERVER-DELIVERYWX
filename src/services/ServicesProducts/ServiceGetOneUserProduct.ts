import { getRepository } from 'typeorm';
import { Products } from '../../entities/Products';

class ServiceGetOneUserProduct {
  async execute() {
    const productRepositorie = getRepository(Products);

    const products = await productRepositorie.find({
      relations: ['user'],
    });

    return products;
  }
}

export { ServiceGetOneUserProduct };

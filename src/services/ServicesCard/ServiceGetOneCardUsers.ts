import { getRepository } from 'typeorm';
import { Cards } from '../../entities/Cards';

class ServiceGetOneCardUsers {
  async execute() {
    const addressRepositorie = getRepository(Cards);

    const address = await addressRepositorie.find({
      relations: ['user'],
    });

    return address;
  }
}

export { ServiceGetOneCardUsers };

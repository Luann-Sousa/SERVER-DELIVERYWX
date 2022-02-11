import { getRepository } from 'typeorm';
import { Cards } from '../../entities/Cards';

class GetAlllCardService {
  async execute() {
    const addressRepositorie = getRepository(Cards);

    const address = await addressRepositorie.find();

    return address;
  }
}

export { GetAlllCardService };

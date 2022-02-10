import { getRepository } from 'typeorm';
import { Address } from '../../entities/Address';

class GetAlllAddressService {
  async execute() {
    const addressRepositorie = getRepository(Address);

    const address = await addressRepositorie.find();

    return address;
  }
}

export { GetAlllAddressService };

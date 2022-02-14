import { getRepository } from 'typeorm';
import { Company } from '../../entities/Company';

class ServiceGetOneRelatCompany {
  async execute() {
    const paymentsRepositorie = getRepository(Company);

    const payments = await paymentsRepositorie.find({
      relations: ['user', 'address'],
    });

    return payments;
  }
}

export { ServiceGetOneRelatCompany };

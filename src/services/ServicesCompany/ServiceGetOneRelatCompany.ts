import { getRepository } from 'typeorm';
import { Company } from '../../entities/Company';

class ServiceGetOneRelatCompany {
  async execute() {
    const companyRepositorie = getRepository(Company);

    const companys = await companyRepositorie.find({
      relations: ['user', 'address'],
    });

    return companys;
  }
}

export { ServiceGetOneRelatCompany };

import { EntityRepository, Repository } from 'typeorm';
import { Company } from '../../entities/Company';

@EntityRepository(Company)
class RepositoriesCompany extends Repository<Company> {}

export { RepositoriesCompany };

import { EntityRepository, Repository } from 'typeorm';
import { Address } from '../../entities/Address';

@EntityRepository(Address)
class RepositorieAddress extends Repository<Address> {}

export { RepositorieAddress };

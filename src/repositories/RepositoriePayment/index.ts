import { EntityRepository, Repository } from 'typeorm';
import { Payments } from '../../entities/Payment';

@EntityRepository(Payments)
class RepositoriesPayments extends Repository<Payments> {}

export { RepositoriesPayments };

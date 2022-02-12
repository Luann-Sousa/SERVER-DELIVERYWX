import { EntityRepository, Repository } from 'typeorm';
import { Payments } from '../../entities/Payment';

@EntityRepository(Payments)
class RepositoriesPayment extends Repository<Payments> {}

export { RepositoriesPayment };

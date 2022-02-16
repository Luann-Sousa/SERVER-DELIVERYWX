import { EntityRepository, Repository } from 'typeorm';
import { Carr } from '../../entities/Carr';

@EntityRepository(Carr)
class RepositoriesCarr extends Repository<Carr> {}

export { RepositoriesCarr };

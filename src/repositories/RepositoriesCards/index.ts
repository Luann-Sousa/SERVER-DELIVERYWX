import { EntityRepository, Repository } from 'typeorm';
import { Cards } from '../../entities/Cards';

EntityRepository(Cards);
class RepositorieCard extends Repository<Cards> {}

export { RepositorieCard };

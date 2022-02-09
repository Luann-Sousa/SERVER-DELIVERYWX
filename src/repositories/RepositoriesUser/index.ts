import { EntityRepository, Repository } from 'typeorm';
import { EntitiesUser } from '../../entities/EntitiesUser';

@EntityRepository(EntitiesUser)
class UserRepository extends Repository<EntitiesUser> {}

export { UserRepository };

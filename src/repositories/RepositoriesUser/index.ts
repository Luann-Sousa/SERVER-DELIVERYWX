import { EntityRepository, Repository } from 'typeorm';
import { EntitiesUser } from '../../entities/EntitiesUser';

@EntityRepository(EntitiesUser)
class UserRepository extends Repository<EntitiesUser> {
  findybyID(id: string) {
    return this.findybyID(id);
  }
}

export { UserRepository };

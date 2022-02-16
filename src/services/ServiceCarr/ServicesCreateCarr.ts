import { getCustomRepository } from 'typeorm';
import { RepositoriesCarr } from '../../repositories/RepositorieCarr';

interface ICarrProps {
  user_id: string;
  product_id: string;
}

class ServicesCreateCarr {
  async execute({ product_id, user_id }: ICarrProps) {
    const carrReposotry = getCustomRepository(RepositoriesCarr);

    const carr = carrReposotry.create({
      product_id,
      user_id,
    });

    await carrReposotry.save(carr);

    return carr;
  }
}

export { ServicesCreateCarr };

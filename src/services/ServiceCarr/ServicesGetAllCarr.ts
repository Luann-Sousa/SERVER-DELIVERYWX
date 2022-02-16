import { getRepository } from 'typeorm';
import { Carr } from '../../entities/Carr';

class ServicesGetAllCarr {
  async execute() {
    const carrRepositorie = getRepository(Carr);

    const carrs = await carrRepositorie.find({
      relations: ['user', 'product'],
    });

    return carrs;
  }
}

export { ServicesGetAllCarr };

import { getRepository } from 'typeorm';
import { Carr } from '../../entities/Carr';

class ServicesGetAllCarr {
  async execute() {
    const carrRepository = getRepository(Carr);

    const carrs = await carrRepository.find();

    return carrs;
  }
}

export { ServicesGetAllCarr };

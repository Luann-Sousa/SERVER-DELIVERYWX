import { getRepository } from 'typeorm';
import { Carr } from '../../entities/Carr';

class SevicesGetOneRelatCarr {
  async execute() {
    const carrRepository = getRepository(Carr);

    const carrs = await carrRepository.find({
      relations: ['user', 'product'],
    });

    return carrs;
  }
}

export { SevicesGetOneRelatCarr };

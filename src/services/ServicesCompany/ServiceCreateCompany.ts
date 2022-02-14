import { getCustomRepository } from 'typeorm';
import { RepositoriesCompany } from '../../repositories/RepositorieCompany';

interface ICompanyPropos {
  name: string;
  file: string;
  description: string;
  cnpj: string;
  assessment: number;
  delivery_feed: number;
  delivery_time: string;
  user_id: string;
  address_id: string;
}

class ServiceCreateCompany {
  async execute({
    name,
    file,
    description,
    cnpj,
    assessment,
    delivery_feed,
    delivery_time,
    user_id,
    address_id,
  }: ICompanyPropos) {
    const useReposotry = getCustomRepository(RepositoriesCompany);

    const card = useReposotry.create({
      name,
      file,
      description,
      cnpj,
      assessment,
      delivery_feed,
      delivery_time,
      user_id,
      address_id,
    });

    await useReposotry.save(card);

    return card;
  }
}

export { ServiceCreateCompany };

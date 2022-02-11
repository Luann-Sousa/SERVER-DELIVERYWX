import { getCustomRepository } from 'typeorm';
import { RepositorieCard } from '../../repositories/RepositoriesCard';

interface ICardUserProps {
  name_card: string;
  number_card: number;
  cpf_card: string;
  date_card: string;
  cvv_card: number;
  user_id: string;
}

class CreateUserService {
  async execute({
    name_card,
    number_card,
    cpf_card,
    date_card,
    cvv_card,
    user_id,
  }: ICardUserProps) {
    const useReposotry = getCustomRepository(RepositorieCard);

    const card = useReposotry.create({
      name_card,
      number_card,
      cpf_card,
      date_card,
      cvv_card,
      user_id,
    });

    await useReposotry.save(card);

    return card;
  }
}

export { CreateUserService };

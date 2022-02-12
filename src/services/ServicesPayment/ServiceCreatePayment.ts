import { getCustomRepository } from 'typeorm';
import { RepositoriesPayment } from '../../repositories/RepositoriePayment';

interface IPaymentProps {
  obeservation: string;
  type_payment: string;
  name_expresso_card?: string;
  number_card?: number;
  date_card?: string;
  cvv_card?: number;
  quantity: number;
  resumo: string;
  toti: string;
  card_id?: string;
  user_id: string;
}

class ServiceCreatePayment {
  async execute({
    obeservation,
    type_payment,
    name_expresso_card,
    number_card,
    date_card,
    cvv_card,
    quantity,
    resumo,
    toti,
    card_id,
    user_id,
  }: IPaymentProps) {
    const paymentReposotry = getCustomRepository(RepositoriesPayment);

    const payment = paymentReposotry.create({
      obeservation,
      type_payment,
      name_expresso_card,
      number_card,
      date_card,
      cvv_card,
      quantity,
      resumo,
      toti,
      card_id,
      user_id,
    });

    await paymentReposotry.save(payment);

    return payment;
  }
}

export { ServiceCreatePayment };

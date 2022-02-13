import { getCustomRepository } from 'typeorm';
import { RepositoriesPayment } from '../../repositories/RepositoriePayment';
import { RepositoriesProduct } from '../../repositories/RepositorieProduct';
import { IProductProps } from '../ServicesProducts/ServiceProductCreate';

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
  product_id?: string;

  name?: string;
  categories?: string;
  description?: string;
  price?: number;
  stock?: number;
  delivery_fee?: number;
  delivery_time?: string;
  assessment?: number;
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
    product_id,
  }: IPaymentProps) {
    const paymentRepositry = getCustomRepository(RepositoriesPayment);
    const productRepository = getCustomRepository(RepositoriesProduct);

    const productAllExist = await productRepository.findOne(product_id);

    const resultStock = productAllExist.stock - quantity;
    console.log(resultStock);

    const payment = paymentRepositry.create({
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
      product_id,
    });

    await paymentRepositry.save(payment);
    // console.log('salvo db', payment);

    productAllExist.stock = resultStock ? resultStock : productAllExist.stock;

    const result = await productRepository.save(productAllExist);
    // console.log('atualizado a tabela de produtos', result);
    return payment;
  }
}

export { ServiceCreatePayment };

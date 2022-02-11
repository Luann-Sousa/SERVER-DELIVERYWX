import { Request, Response } from 'express';
import { CreateUserService } from '../../services/ServicesCard/ServiceCreateCard';

class CardCreateControler {
  async handle(request: Request, response: Response) {
    const { name_card, number_card, cpf_card, date_card, cvv_card, user_id } =
      request.body;

    const createUser = new CreateUserService();

    const result = await createUser.execute({
      name_card,
      number_card,
      cpf_card,
      date_card,
      cvv_card,
      user_id,
    });
    return response.status(201).json({
      status: 200,
      cards: result,
    });
  }
}

export { CardCreateControler };

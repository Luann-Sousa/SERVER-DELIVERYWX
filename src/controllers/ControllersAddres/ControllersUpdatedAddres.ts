import { Request, Response } from 'express';
import { ServiceUpdatedAddres } from '../../services/ServicesAddress/ServiceUpdatedAddres';

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      uf,
      city,
      zip_code,
      district,
      street,
      number,
      complement,
      lat,
      long,
      user_id,
    } = request.body;

    const userService = new ServiceUpdatedAddres();

    const result = await userService.execute({
      id,
      uf,
      city,
      zip_code,
      district,
      street,
      number,
      complement,
      lat,
      long,
      user_id,
    });
    if (result instanceof Error) {
      return response.json(result.message);
    }

    return response.status(200).json({
      status: 200,
      messeger: 'Endereço foi atualizada com sucesso!',
      addres: result,
    });
  }
}

export { UpdateUserController };

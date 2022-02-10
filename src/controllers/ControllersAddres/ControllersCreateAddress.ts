import { Request, Response } from 'express';
import { CreateAddressService } from '../../services/ServicesAddress/ServiceCreateAddress';

class CreateAddressController {
  async handle(request: Request, response: Response) {
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

    const service = new CreateAddressService();

    const result = await service.execute({
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
      return response.status(400).json(result.message);
    }

    return response.status(200).json({
      status: 200,
      address: result,
    });
  }
}

export { CreateAddressController };

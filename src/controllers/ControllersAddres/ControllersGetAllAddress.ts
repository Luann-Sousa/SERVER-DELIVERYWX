import { Request, Response } from 'express';
import { GetAlllAddressService } from '../../services/ServicesAddress/ServiceGetAllAddress';

class GetAlllAddressController {
  async handle(request: Request, response: Response) {
    const service = new GetAlllAddressService();

    const result = await service.execute();

    return response.status(200).json({
      status: 200,
      address: result,
    });
  }
}

export { GetAlllAddressController };

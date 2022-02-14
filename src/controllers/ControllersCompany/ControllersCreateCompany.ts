import { Request, Response } from 'express';
import { ServiceCreateCompany } from '../../services/ServicesCompany/ServiceCreateCompany';

class ControllerCreateCompany {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
      cnpj,
      assessment,
      delivery_feed,
      delivery_time,
      user_id,
      address_id,
    } = request.body;
    const { filename: file } = request.file;

    const createCompany = new ServiceCreateCompany();

    const company = await createCompany.execute({
      name,
      description,
      cnpj,
      assessment,
      delivery_feed,
      delivery_time,
      user_id,
      address_id,
      file,
    });
    return response.status(201).json({
      status: 201,
      messeger: 'Empressa foi criado com sucesso!',
      companys: company,
    });
  }
}

export { ControllerCreateCompany };

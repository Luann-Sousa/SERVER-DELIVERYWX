import { Request, Response } from 'express';
import { GetOneUserService } from '../../services/ServicesUser/ServiceGetOneUser';

class GetOneUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.params;

    const userGetOne = new GetOneUserService();

    const result = await userGetOne.execute(user_id);

    return response.status(200).json({
      result,
    });
  }
}

export { GetOneUserController };

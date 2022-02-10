import express from 'express';
import { CreateAddressController } from '../../controllers/ControllersAddres/ControllersCreateAddress';
import { GetAlllAddressController } from '../../controllers/ControllersAddres/ControllersGetAllAddress';

const RouterAddres = express.Router();

const createAddres = new CreateAddressController(); //criação de um endereço.
const getAllAddress = new GetAlllAddressController(); // busca por todos endereços.

RouterAddres.post('/address', createAddres.handle);
RouterAddres.get('/address', getAllAddress.handle);

export { RouterAddres };

import express from 'express';
import { CreateAddressController } from '../../controllers/ControllersAddres/ControllersCreateAddress';
import { GetAlllAddressController } from '../../controllers/ControllersAddres/ControllersGetAllAddress';
import { GetAlllAddressUsersController } from '../../controllers/ControllersAddres/ControllersGetAllAddressUsers';

const RouterAddres = express.Router();

const createAddres = new CreateAddressController(); //criação de um endereço.
const getAllAddress = new GetAlllAddressController(); // buscar por todos endereços.
const getAllAddresUsers = new GetAlllAddressUsersController(); //buscar por endereços relacionado a um usuário especifico.

RouterAddres.post('/address', createAddres.handle);
RouterAddres.get('/address', getAllAddress.handle);
RouterAddres.get('/address', getAllAddresUsers.handle);

export { RouterAddres };

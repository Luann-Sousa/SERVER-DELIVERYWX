import express from 'express';

import { CreateAddressController } from '../../controllers/ControllersAddres/ControllersCreateAddress';
import { GetAlllAddressController } from '../../controllers/ControllersAddres/ControllersGetAllAddress';
import { GetAlllAddressUsersController } from '../../controllers/ControllersAddres/ControllersGetAllAddressUsers';
import { UpdateUserController } from '../../controllers/ControllersAddres/ControllersUpdatedAddres';
import { ControllersDeletedAddres } from '../../controllers/ControllersAddres/ControllersDeletedAddres';

const RouterAddres = express.Router();

const createAddres = new CreateAddressController(); //criação de um endereço.
const getAllAddress = new GetAlllAddressController(); //buscar por todos endereços.
const getAllAddresUsers = new GetAlllAddressUsersController(); //buscar por endereços relacionado a um usuário especifico.
const updatedAddresUsers = new UpdateUserController(); //atualizar endereço.
const deletedAddressUsers = new ControllersDeletedAddres(); //excluir um endereço do usuário.

RouterAddres.post('/address', createAddres.handle);
RouterAddres.get('/address', getAllAddress.handle);
RouterAddres.get('/address/user', getAllAddresUsers.handle);
RouterAddres.put('/address/:id', updatedAddresUsers.handle);
RouterAddres.delete('/v1/address/delet/:id_addres', deletedAddressUsers.handle);

export { RouterAddres };

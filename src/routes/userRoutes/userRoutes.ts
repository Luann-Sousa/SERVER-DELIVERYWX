import express from 'express';
import { UserCreateControler } from '../../controllers/ControllersUser';
import { UpdateUserController } from '../../controllers/ControllersUser/ControllersUpdatedUser';
import { DeletedUserController } from '../../controllers/ControllersUser/ControllersDeletedUser';

const createUser = new UserCreateControler(); //criação de um usuário.
const updatedUser = new UpdateUserController(); // atualização de um usuário.
const deletedUser = new DeletedUserController(); // excluido um usuário.

const Router = express.Router();

Router.post('/users', createUser.handle);
Router.put('/users/:id', updatedUser.handle);
Router.delete('/users/:id', deletedUser.handle);

export { Router };

import express from 'express';

import { UserCreateControler } from '../../controllers/ControllersUser/ControllersCreateUser';
import { UpdateUserController } from '../../controllers/ControllersUser/ControllersUpdatedUser';
import { DeletedUserController } from '../../controllers/ControllersUser/ControllersDeletedUser';
import { GetaAllUserController } from '../../controllers/ControllersUser/ControllersGetAllUser';
import { GetOneUserController } from '../../controllers/ControllersUser/ControllersGetOne';

const createUser = new UserCreateControler(); // criação de um usuário.
const updatedUser = new UpdateUserController(); // atualização de um usuário.
const deletedUser = new DeletedUserController(); // excluido um usuário.
const getlAllUser = new GetaAllUserController(); // buscar todos usuários.
const getOneUser = new GetOneUserController(); // buscar por um usuário especifico.

const Router = express.Router();

Router.post('/users', createUser.handle);
Router.put('/users/:id', updatedUser.handle);
Router.delete('/users/:id', deletedUser.handle);
Router.get('/users', getlAllUser.handle);
Router.get('/users/:user_id', getOneUser.handle);

export { Router };

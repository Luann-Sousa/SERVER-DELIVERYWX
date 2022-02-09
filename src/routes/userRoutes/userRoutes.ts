import express from 'express';
import { UserCreateControler } from '../../controllers/ControllersUser';
import { UpdateUserController } from '../../controllers/ControllersUser/ControllersUpdatedUser';

const createUser = new UserCreateControler(); //criação de um usuário
const updatedUser = new UpdateUserController(); // atualização de um usuário

const Router = express.Router();

Router.post('/users', createUser.handle);
Router.put('/users/:id', updatedUser.handle);

export { Router };

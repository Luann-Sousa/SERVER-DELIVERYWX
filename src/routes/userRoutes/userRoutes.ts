import express from 'express';

import multer from 'multer';
import createMulter from '../../utils/upload';

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

const upload = multer(createMulter); //instânciando o multer para já usarmos.

Router.post('/v1/users', upload.single('file'), createUser.handle);
Router.put('/v1/users/:id', updatedUser.handle);
Router.delete('/v1/users/:id', deletedUser.handle);
Router.get('/v1/users', getlAllUser.handle);
Router.get('/v1/users/one/:user_id', getOneUser.handle);

export { Router };

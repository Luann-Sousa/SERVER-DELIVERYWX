import express from 'express';
import { ControllersCreateCardUsers } from '../../controllers/ControllersCard/ControllersCreateCard';
import { ControllersGetAllCardUsers } from '../../controllers/ControllersCard/ControllersGetAllCard';
import { ControllersGetOneCardUsers } from '../../controllers/ControllersCard/ControllersGetOneCardUsers';

const RouterCard = express.Router();

const createCardUsers = new ControllersCreateCardUsers(); //cirção de um cartão.
const getAllCardUsers = new ControllersGetAllCardUsers(); //buscar cartões cadastrados.
const getOneCardUsers = new ControllersGetOneCardUsers(); //buscar cartões relacionado a um usuário.

RouterCard.post('/v1/cards', createCardUsers.handle);
RouterCard.get('/v1/cards', getAllCardUsers.handle);
RouterCard.get('/v1/cards/onecard', getOneCardUsers.handle);

export { RouterCard };

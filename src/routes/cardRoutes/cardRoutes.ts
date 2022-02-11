import express from 'express';
import { CardCreateControler } from '../../controllers/ControllersCard/ControllersCreateCard';
import { GetAlllCardController } from '../../controllers/ControllersCard/ControllersGetAllCard';

const RouterCard = express.Router();

const createCardUsers = new CardCreateControler(); //cirção de um cartão.
const getAllCardUsers = new GetAlllCardController(); // buscar cartões cadastrados.

RouterCard.post('/v1/cards', createCardUsers.handle);
RouterCard.get('/v1/cards', getAllCardUsers.handle);

export { RouterCard };

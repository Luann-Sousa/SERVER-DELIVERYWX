import express from 'express';
import { CardCreateControler } from '../../controllers/ControllersCard/ControllersCreateCard';

const RouterCard = express.Router();

const createCardUsers = new CardCreateControler(); //cirção de um cartão.

RouterCard.post('/v1/card', createCardUsers.handle);

export { RouterCard };

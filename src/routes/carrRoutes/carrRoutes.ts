import express from 'express';
import { ControllersCreateCarr } from '../../controllers/ControllersCarr/ControllersCreateCarr';
import { ControllersGetAllCarr } from '../../controllers/ControllersCarr/ControllersGetAllCarr';

const createCarr = new ControllersCreateCarr(); //criação de um carrinho de compra
const getAtAllCarr = new ControllersGetAllCarr(); //buscado todos pedico adicionado ao um carinho

const RouterCarr = express.Router();

RouterCarr.post('/v1/carrs', createCarr.handle);
RouterCarr.get('/v1/carrs', getAtAllCarr.handle);

export { RouterCarr };

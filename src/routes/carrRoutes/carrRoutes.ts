import express from 'express';
import { ControllersCreateCarr } from '../../controllers/ControllersCarr/ControllersCreateCarr';

const createCarr = new ControllersCreateCarr(); //criação de um carrinho de compra

const RouterCarr = express.Router();

RouterCarr.post('/v1/carrs', createCarr.handle);

export { RouterCarr };

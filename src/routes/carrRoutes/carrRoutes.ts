import express from 'express';
import { ControllersCreateCarr } from '../../controllers/ControllersCarr/ControllersCreateCarr';
import { ControllersGetAllCarr } from '../../controllers/ControllersCarr/ControllersGetAllCarr';
import { ControllersUpdatedCarr } from '../../controllers/ControllersCarr/ControllersUpdatedCarr';

const createCarr = new ControllersCreateCarr(); //criação de um carrinho de compra
const getAtAllCarr = new ControllersGetAllCarr(); //buscado todos pedico adicionado ao um carinho
const updatedCar = new ControllersUpdatedCarr(); //ataulização de um carrinho

const RouterCarr = express.Router();

RouterCarr.post('/v1/carrs', createCarr.handle);
RouterCarr.get('/v1/carrs', getAtAllCarr.handle);
RouterCarr.put('/v1/carrs/updated/:id', updatedCar.handle);

export { RouterCarr };

import express from 'express';
import { ControllersCreateCarr } from '../../controllers/ControllersCarr/ControllersCreateCarr';
import { ControllersGetAllCarr } from '../../controllers/ControllersCarr/ControllersGetAllCarr';
import { ControllersGetOneRelatCarr } from '../../controllers/ControllersCarr/ControllersGetOneRelatCarr';
import { ControllersUpdatedCarr } from '../../controllers/ControllersCarr/ControllersUpdatedCarr';
import { ControllersDeletedCarr } from '../../controllers/ControllersCarr/ControllersDeletedCarr';

const createCarr = new ControllersCreateCarr(); //criação de um carrinho de compra
const getAtAllCarr = new ControllersGetAllCarr(); //buscado todos pedico adicionado ao um carinho
const updatedCarr = new ControllersUpdatedCarr(); //ataulização de um carrinho
const deletedCarr = new ControllersDeletedCarr(); // exluir um carrinho de comprars
const getAllOneRelatCarr = new ControllersGetOneRelatCarr(); // listar carrinho relacionado ao usuário e ao pedido.

const RouterCarr = express.Router();

RouterCarr.post('/v1/carrs', createCarr.handle);
RouterCarr.get('/v1/carrs', getAtAllCarr.handle);
RouterCarr.get('/v1/carrs/onde-ralaion', getAllOneRelatCarr.handle);
RouterCarr.put('/v1/carrs/updated/:id', updatedCarr.handle);
RouterCarr.delete('/v1/carrs/deleted/:id_carr', deletedCarr.handle);

export { RouterCarr };

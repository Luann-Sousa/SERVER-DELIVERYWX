import express from 'express';
import { CreateAddressController } from '../../controllers/ControllersAddres/ControllersCreateAddress';

const RouterAddres = express.Router();

const createAddres = new CreateAddressController(); //criação de um endereço.

RouterAddres.post('/addres', createAddres.handle);

export { RouterAddres };

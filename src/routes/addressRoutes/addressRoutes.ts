import express from 'express';
import { CreateAddressController } from '../../controllers/ControllersAddres/ControllersCreateAddress';

const Router = express.Router();

const createAddres = new CreateAddressController(); //criação de um endereço.

Router.post('/addres', createAddres.handle);

export { Router };

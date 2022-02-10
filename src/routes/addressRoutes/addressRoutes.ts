import express from 'express';
import { CreateAddressController } from '../../controllers/ControllersAddres/ControllersCreateAddress';

const RouterAddres = express.Router();

const createAddres = new CreateAddressController(); //criação de um endereço.

RouterAddres.post('/address', createAddres.handle);

export { RouterAddres };

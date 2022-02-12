import express from 'express';
import { ControllersCreatePayment } from '../../controllers/ControllersPayment/ControllerCreatePayment';

const createPayment = new ControllersCreatePayment(); //criação de um pagamento.

const RouterPayment = express.Router();

RouterPayment.post('/v1/payments', createPayment.handle);

export { RouterPayment };

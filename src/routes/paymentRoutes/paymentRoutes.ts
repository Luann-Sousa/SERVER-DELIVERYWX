import express from 'express';
import { ControllersCreatePayment } from '../../controllers/ControllersPayment/ControllerCreatePayment';
import { ControllersGetAllPayment } from '../../controllers/ControllersPayment/ControllersGetAllPayments';

const createPayment = new ControllersCreatePayment(); //criação de um pagamento.
const getAllPayment = new ControllersGetAllPayment(); // buscar todos pagamentos feito no sistema.

const RouterPayment = express.Router();

RouterPayment.post('/v1/payments', createPayment.handle);
RouterPayment.get('/v1/payments', getAllPayment.handle);

export { RouterPayment };

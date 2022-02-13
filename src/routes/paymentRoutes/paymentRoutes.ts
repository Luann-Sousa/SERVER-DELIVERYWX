import express from 'express';
import { ControllersCreatePayment } from '../../controllers/ControllersPayment/ControllerCreatePayment';
import { ControllersGetAllPayment } from '../../controllers/ControllersPayment/ControllersGetAllPayments';
import { ControllersGetRelatPayments } from '../../controllers/ControllersPayment/ControllersGetRelatPayments';

const createPayment = new ControllersCreatePayment(); //criação de um pagamento.
const getAllPayment = new ControllersGetAllPayment(); // buscar todos pagamentos feito no sistema.
const getAllRelatPayment = new ControllersGetRelatPayments(); // buscar todos pagamentos relacionas(user/card/product)

const RouterPayment = express.Router();

RouterPayment.post('/v1/payments', createPayment.handle);
RouterPayment.get('/v1/payments', getAllPayment.handle);
RouterPayment.get('/v1/payments/relat', getAllRelatPayment.handle);

export { RouterPayment };

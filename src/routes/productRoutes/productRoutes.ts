import express from 'express';
import { ControllersCreateProduct } from '../../controllers/ControllersProduct/ControllersCreateProduct';

const createProduct = new ControllersCreateProduct(); //crição de u produto.

const RouterProduct = express.Router();

RouterProduct.post('/products', createProduct.handle);

export { RouterProduct };

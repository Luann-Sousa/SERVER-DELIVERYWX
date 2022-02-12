import express from 'express';
import { ControllersCreateProduct } from '../../controllers/ControllersProduct/ControllersCreateProduct';
import { ControllersGetAllProduct } from '../../controllers/ControllersProduct/ControllersGetAllProduct';

const createProduct = new ControllersCreateProduct(); //criação de um produto.
const getAllProduct = new ControllersGetAllProduct(); // buscar todos produtos cadastrados

const RouterProduct = express.Router();

RouterProduct.post('/products', createProduct.handle);
RouterProduct.get('/products', getAllProduct.handle);

export { RouterProduct };

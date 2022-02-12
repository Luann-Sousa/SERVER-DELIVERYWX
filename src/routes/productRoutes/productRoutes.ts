import express from 'express';
import { ControllersCreateProduct } from '../../controllers/ControllersProduct/ControllersCreateProduct';
import { ControllersGetAllProduct } from '../../controllers/ControllersProduct/ControllersGetAllProduct';
import { ControllersGetOneUserProduct } from '../../controllers/ControllersProduct/ControllersGetOneUserProduct';

const createProduct = new ControllersCreateProduct(); //criação de um produto.
const getAllProduct = new ControllersGetAllProduct(); // buscar todos produtos cadastrados
const getOneUserProduct = new ControllersGetOneUserProduct(); //buscar todos produtos relacionado a Admin.

const RouterProduct = express.Router();

RouterProduct.post('/products', createProduct.handle);
RouterProduct.get('/products', getAllProduct.handle);
RouterProduct.get('/products/one', getOneUserProduct.handle);

export { RouterProduct };

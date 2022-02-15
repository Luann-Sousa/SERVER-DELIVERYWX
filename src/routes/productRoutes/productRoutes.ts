import express from 'express';
import multer from 'multer';
import createMulter from '../../utils/upload';

import { ControllersCreateProduct } from '../../controllers/ControllersProduct/ControllersCreateProduct';
import { ControllersGetAllProduct } from '../../controllers/ControllersProduct/ControllersGetAllProduct';
import { ControllersGetOneUserProduct } from '../../controllers/ControllersProduct/ControllersGetOneUserProduct';
import { ControllerUpdatedProduct } from '../../controllers/ControllersProduct/ControllerUpdatedProduct';
import { ControllersDeletdProduct } from '../../controllers/ControllersProduct/ControllersDeletdProduct';

const createProduct = new ControllersCreateProduct(); //criação de um produto.
const getAllProduct = new ControllersGetAllProduct(); // buscar todos produtos cadastrados
const getOneUserProduct = new ControllersGetOneUserProduct(); //buscar todos produtos relacionado a Admin.
const updatedProduct = new ControllerUpdatedProduct(); //atualizar um produto cadastrado no sistema.
const deletedProduct = new ControllersDeletdProduct(); //excluindo um produto cadastrado no sistema.

const RouterProduct = express.Router();

const upload = multer(createMulter); //intanciado o multer

RouterProduct.post('/v1/products', upload.single('file'), createProduct.handle);
RouterProduct.get('/v1/products', getAllProduct.handle);
RouterProduct.get('/v1/products/one', getOneUserProduct.handle);
RouterProduct.put('/v1/products/updated/:id', updatedProduct.handle);
RouterProduct.delete('/v1/products/deleted/:id_product', deletedProduct.handle);

export { RouterProduct };

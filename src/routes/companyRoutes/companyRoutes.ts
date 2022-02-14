import express from 'express';
import multer from 'multer';
import createMulter from '../../utils/upload';

import { ControllerCreateCompany } from '../../controllers/ControllersCompany/ControllersCreateCompany';
import { ControllersGetOneRelatCompany } from '../../controllers/ControllersCompany/ControllersGetOneRelatCompany';

const createCompany = new ControllerCreateCompany(); //criação de uma empresa
const getOneRelatCompany = new ControllersGetOneRelatCompany(); //buscando todoas empresas relacionados a user/addres.

const RouteCompany = express.Router();

const upload = multer(createMulter); //instânciando o multer para já usarmos.

RouteCompany.post('/v1/company', upload.single('file'), createCompany.handle);
RouteCompany.get('/v1/company', getOneRelatCompany.handle);

export { RouteCompany };

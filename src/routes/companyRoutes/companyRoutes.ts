import express from 'express';
import multer from 'multer';
import createMulter from '../../utils/upload';

import { ControllerCreateCompany } from '../../controllers/ControllersCompany/ControllersCreateCompany';

const createCompany = new ControllerCreateCompany();

const RouteCompany = express.Router();

const upload = multer(createMulter);

RouteCompany.post('/v1/company', upload.single('file'), createCompany.handle); //instânciando o multer para já usarmos.

export { RouteCompany };

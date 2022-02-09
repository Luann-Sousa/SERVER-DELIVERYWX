import express from 'express';
import { UserCreateControler } from '../../controllers/ControllersUser';

const Router = express.Router();

const createUser = new UserCreateControler(); //criação de um usuário

Router.post('/users', createUser.handle);

Router.get('/index', (request, response) => {
  return response.json({
    users: [
      { id: 1, nome: 'Luann' },
      { id: 2, nome: 'Pedro' },
    ],
  });
});

export { Router };

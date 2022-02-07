import express from 'express';

const Router = express.Router();

Router.get('/index', (request, response) => {
  return response.json({
    users: [
      { id: 1, nome: 'Luann' },
      { id: 2, nome: 'Pedro' },
    ],
  });
});

export { Router };

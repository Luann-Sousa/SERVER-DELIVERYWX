import express, { Request, Response, NextFunction } from 'express';
import './database';
import { MainRouterUsers } from './routes';

const app = express();

app.use(express.json()); // trabalhar com json

//rotas da aplicação
app.use(MainRouterUsers);

// funtion capturando os erros da aplicação.
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // validação que pega o error
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }
    // caso tenha error com servidor
    return response.status(500).json({
      status: 'error',
      messeger: 'Error Internal Server Error',
    });
  },
);

app.listen(3333, () =>
  console.log('Start is running! http://localhost:3333 🤡'),
); // setup server...

import { createConnection } from 'typeorm'; //pegamos o cara para cria nossa conexão com bd

createConnection()
  .then(() => console.log('Connectado Dev´ Luan'))
  .catch(error => console.log('errrokk', error)); //aqui ja iniciamos nossa conexao simples ne rs

const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
app.use(express.json());
/* Métodos HTTP
GET:buscar/listar uma informação no back-end
POST: criar uma infomração no back-end
PUT:Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
Usa o Insomnia/Getpostman para visualizar o retorno de rotas com métodos além do POST
*/  

/* 
Tipos de Parâmetros que se pode enviar para o uma rota.
Query Param: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
Route Params: Parâmtros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
app.use(cors());
app.use(routes);
app.listen(3333);
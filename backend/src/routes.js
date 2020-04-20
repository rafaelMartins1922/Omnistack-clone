const express = require('express');
const routes = express.Router();

const ongCont = require('./Controllers/ongController');
const incCont = require('./Controllers/incidentController');
const profController = require('./Controllers/profileController');
const sessionController = require('./Controllers/sessionController');
routes.get('/ongs',ongCont.index);
routes.post('/ongs',ongCont.create); 
routes.get('/incidents',incCont.index);
routes.post('/incidents',incCont.create);
routes.delete('/incidents/:id',incCont.delete);
routes.get('/profile',profController.index);
routes.post('/sessions',sessionController.create);
module.exports = routes;
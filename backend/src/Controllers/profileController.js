//Controller para listar incidentes específicos de cada empresa, não implementado 
// em incidentController para respeitar o padrão MVC
const connection = require('../database/connection');
module.exports = {
   async index(request,response){
    const ong_id = request.headers.authorization;
    const incidents = await connection('incidents').select('*').where('ong_id',ong_id);
    return response.json(incidents);
   }
}
const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres')

class StudentsService {

  constructor(){

  }

  async getAllStudents(){
    //para errores
    //throw boom.notFound('product not found')
    const student = await getConnection();
    const rta = await student.query('SELECT * FROM tasks');
    return rta.rows;
  }



}

module.exports = StudentsService;

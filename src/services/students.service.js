const boom = require('@hapi/boom');

class StudentsService {

  constructor(){

  }

  async getAllStudents(){
    //para errores
    //throw boom.notFound('product not found')
  }

}

module.exports = StudentsService;

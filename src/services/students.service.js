const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');



class StudentsService {
  constructor() { }

  async createStudent(data) {
    const newStudent = await models.Student.create(data);
    return newStudent;
  }

  async getAllStudents() {
    //para errores
    //throw boom.notFound('product not found')
    const student = await models.Student.findAll();
    return student
  }

  async getStudentById(id) {
    const student = await models.Student.findByPk(id);
    if (!student) {
      throw boom.notFound('student not found');
    }
    return student;
  }

  async updateStudent(id, changes) {
    const student = await this.getStudentById(id)
    const updateStudent = await student.update(changes);
    return updateStudent
  }

  async deleteStudent(id) {
    const student = await this.getStudentById(id)
    await student.destroy();
    return { id }
  }
}

module.exports = StudentsService;

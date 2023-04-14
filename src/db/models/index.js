const { Student, StudentSchema } = require("./student.model");


function setupModels(sequelize) {
  Student.init(StudentSchema, Student.config(sequelize))


}

module.exports = setupModels;

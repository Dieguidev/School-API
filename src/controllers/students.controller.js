const StudentsService = require("../services/students.service")

const service = new StudentsService

const getStudents = async (req, res) => {
  const students = await service.getAllStudents();
  res.json(students)
}

module.exports = { getStudents }

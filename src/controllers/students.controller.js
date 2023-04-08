const StudentsService = require("../services/students.service")

const service = new StudentsService

const getStudents = async (req, res) => {
  const students = await service.getAllStudents();
  res.json(students)
}

const getStudentById = async (req, res) => {
try {
    const { id } = req.params;
    const student = await service.findOne(id);
    res.json(student)
} catch (error) {
  next(error);
}
}

module.exports = { getStudents, getStudentById }

const StudentsService = require("../services/students.service")

const service = new StudentsService

const getStudents = async (req, res) => {
  const students = await service.getAllStudents();
  res.json(students)
}

const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await service.getStudentById(id);
    res.json(student)
  } catch (error) {
    next(error);
  }
}

const createStudent = async (req, res, next) => {
  try {
    const body = req.body;
    const newStudent = await service.createStudent(body);
    res.status(201).json(newStudent)
  } catch (error) {
    next(error)
  }
}

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const student = await service.updateStudent(id, body);
    res.json(student);
  } catch (error) {
    next(error);
  }
}

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.deleteStudent(id);
    res.status(200).json({ id });
  } catch (error) {
    next(error);
  }
}

module.exports = { getStudents, getStudentById, createStudent, updateStudent, deleteStudent }

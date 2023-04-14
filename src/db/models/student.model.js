const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE = 'students';

const StudentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Student extends Model {
  static associate(models) {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: 'Student',
      timestamps: false,
      // hooks: {
      //   beforeCreate: async (user, options) =>{
      //     const password = await bcrypt.hash(user.password, 10);
      //     user.password = password;
      //   }
      // }
    }
  }
}
module.exports = { STUDENT_TABLE, StudentSchema, Student }

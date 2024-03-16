const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Tasks = sequelize.define('Tasks', {
  taskID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtask: { 
    type: DataTypes.STRING, 
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false, 
    defaultValue: 'incomplete',
    validate: {
      isIn: [['completed', 'incomplete']],
    },
  },
});

module.exports = Tasks;

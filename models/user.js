const {Sequelize,DataTypes}= require('sequelize');
const sequelize= require ('../config/db');

const User = sequelize.define('User', {
  userID: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }, 
  username: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false, 
  },
  email: {
    type:Sequelize.DataTypes.STRING,
    allowNull: false, 
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false, 
  },
});

module.exports = User;

// const mongoose = require("mongoose");
// const schema = mongoose.Schema
// const userSchema = new schema({
//     firstname:{
//         type:String, 
//         required:true, 
//         unique:true,
//     }, 
//     lastname:{
//         type:String, 
//         required:true, 
//     }
// }); 
// const Employer = mongoose.model('Employer', userSchema);
// module.exports=Employer;


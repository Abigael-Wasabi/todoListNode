const  Sequelize  = require('sequelize');
require('dotenv').config({ path: './.env' });

const sequelize = new Sequelize({
  dialect: 'mysql',
  logging: false,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME, 
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = sequelize; 


// const mongoose= require('mongoose');
// require('dotenv').config({ path: './.env' });

// mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME})
// .then(()=>{
//     console.log('mongodb connected')
// })

// .catch((err)=>console.log(err.message));

// process.on('SIGINT',async()=>{
//   await mongoose.connection.close()
//    process.exit(0)
// })
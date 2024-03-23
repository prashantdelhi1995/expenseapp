require("dotenv").config()
const {Sequelize, DataTypes}= require("sequelize");
const sequelize= new Sequelize(process.env.DATABASE_SCHEMA, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',

});
module.exports=sequelize;

//adding some file

const { Sequelize } = require('sequelize');

const sequelizeClient = new Sequelize(
    'postgres',
    'postgres',
    'Password',{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

module.exports = sequelizeClient;
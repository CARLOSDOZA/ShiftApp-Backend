const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('roles_de_turno', 'root', 'acuario', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
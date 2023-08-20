const Sequelize = require('sequelize');

const connection = new Sequelize('quests', 'root', '453642451t', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
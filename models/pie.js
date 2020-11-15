const {DataTypes} = require('sequelize');
const db = require('../db');

const Pie = db.define('pie', {
    flavor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hotPie: {
       type: DataTypes.BOOLEAN,
       allowNull: false
    },
    vegan: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    baseOfPie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    crust: {
        type: DataTypes.ENUM("Graham Cracker", "Pasty Dough", "Oreo"), //# ENUM means it has to be one of the options listed and spelled the same way
        allowNull: false
    }
})

module.exports = Pie
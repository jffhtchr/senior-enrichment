'use strict'
const db = require('../index');
const Sequelize = require('sequelize');

const Campuses = db.define('Campuses',{
    name: {
        type: Sequelize.STRING,
        allowNull: false //is empty too?
    },
    imgUrl: {
        type: Sequelize.STRING,
        validate:{
            isUrl: true
        }
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = Campuses
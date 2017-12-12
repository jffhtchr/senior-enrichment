'use strict';
const db = require('../index');
const Sequelize = require('sequelize');

const Students = db.define('Students', {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		validate:{
			isEmail: true
		}
	},
	gpa: {
		type: Sequelize.FLOAT,
		validate: {
			min:0.0,
			max:4.0
		}
	},
	fullName: {
		type: Sequelize.VIRTUAL,
		get(){
			return this.getDataValue('firstName') + " " + this.getDataValue('lastName')
		}
	}
  })

  module.exports = Students

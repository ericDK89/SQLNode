const { Sequelize } = require("sequelize");
const configDB = require("../config/db");
const User = require('../models/User')
const Addresses = require('../models/Addresses')
const Tech = require('../models/Techs')

const connection = new Sequelize(configDB);

User.init(connection)
Addresses.init(connection)
Tech.init(connection)

Addresses.associate(connection.models)
User.associate(connection.models)
Tech.associate(connection.models)



module.exports = connection;

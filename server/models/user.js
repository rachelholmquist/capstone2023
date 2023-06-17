const {sequelize} = require('../util/database')
const {DataTypes} = require('sequelize')

module.exports = {
    User : sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userName: DataTypes.STRING,
        hashedPass: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    })
}
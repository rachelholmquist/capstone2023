const {sequelize} = require('../util/database')
const {DataTypes} = require('sequelize')

module.exports = {
    Users : sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING,
        email: DataTypes.STRING,
    }, {
        timestamps: false,
    })
}
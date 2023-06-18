const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    room : sequelize.define('room', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        maxPeople: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        imageUrl: DataTypes.INTEGER, 
    })
}
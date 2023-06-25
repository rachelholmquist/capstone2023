const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Rooms: sequelize.define('rooms', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        maxpeople: DataTypes.INTEGER,
        price: DataTypes.NUMBER,
        imageurl: DataTypes.STRING, 
    }, {
        timestamps: false
    })
}
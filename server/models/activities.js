const {sequelize} = require('../util/database')
const {DataTypes} = require('sequelize')

module.exports = {
    Activities : sequelize.define('activities', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        skillLevel: DataTypes.STRING,
        estimatedTime: DataTypes.STRING,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        price: DataTypes.STRING
})
}
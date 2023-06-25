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
        skilllevel: DataTypes.STRING,
        estimatedtime: DataTypes.STRING,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        price: DataTypes.DECIMAL
}, {
    timestamps: false,
})
}
const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    tripItinerary : sequelize.define('tripItinerary', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        breakfastTime: DataTypes.TIME,
        lunchTime: DataTypes.TIME,
        dinnerTime: DataTypes.TIME,
        userInterestActivities: DataTypes.STRING,
        budget: DataTypes.DECIMAL,
        userSavedActivities: DataTypes.STRING,
        tripDates: DataTypes.DATE,
        userId: DataTypes.INTEGER,
    }, {
        timestamps: false
    })
}
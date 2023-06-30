const {tripItinerary} = require('../models/tripItinerary')

module.exports = {
    getTripItinerary: async(req,res) => {
        

        try{
            const itineraryList = await tripItinerary.findAll()
              res.status(200).send(itineraryList);
        }
        catch(error) {
                console.log('ERROR IN getItineraryList', error)
                res.sendStatus(400)
            }
        },

        addTripItinerary: async (req, res) => {
            try {
                const { tripDates, breakfastTime, lunchTime, dinnerTime,  budget, userId} = req.body;
                await tripItinerary.create({ tripDates, breakfastTime, lunchTime, dinnerTime,  budget,  userId});
                res.sendStatus(200)
            } catch (error) {
                console.log(error);
                res.sendStatus(400);
            }
        },

        deleteTrip: async (req, res) => {
                try {
                    const {id} = req.params
                    await tripItinerary.destroy({ where: {id: +id}})
                    res.sendStatus(200)
                } catch (error) {
                    console.log(error)
                    res.sendStatus(400)
                }
        }
    }
const {tripItinerary} = require('../models/tripItinerary')

module.exports = {
    getTripItinerary: async(req,res) => {
        console.log('test')

        try{
            const itineraryList = await tripItinerary.findAll()
            console.log(itineraryList)
              res.status(200).send(itineraryList);
        }
        catch(error) {
                console.log('ERROR IN getItineraryList', error)
                res.sendStatus(400)
            }
        },

        addTripItinerary: async (req, res) => {
            try {
                const { breakfastTime, lunchTime, dinnerTime, userInterestActivities, budget, userSavedActivities, tripDates, userId } = req.body;
                await tripItinerary.create({ breakfastTime, lunchTime, dinnerTime, interestedIn: userInterestActivities, budget, savedActivities: userSavedActivities, tripDates, userId });
                res.sendStatus(200)
            } catch (error) {
                console.log("Error in post request");
                console.log(error);
                res.sendStatus(400);
            }
        }
    }
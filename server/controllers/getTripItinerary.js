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
        }
    }
const {Activities} = require('../models/activities')

module.exports = {
    getActivities: async(req,res) => {
        console.log('test')

        try{
            const activityList = await Activities.findAll()
            console.log(activityList)
              res.status(200).send(activityList);
        }
        catch(error) {
                console.log('ERROR IN getActivities', error)
                res.sendStatus(400)
            }
        }
    }
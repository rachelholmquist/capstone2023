const {Room} = require('../models/room')

module.exports = {
    getAllRooms: async(req, res) => {
        try{
            const rooms = Room.findAll()
            res.status(200).send(rooms)
        } catch(error) {
            console.log('ERROR IN getAllRooms')
            res.sendStatus(400)
        }
    }
}
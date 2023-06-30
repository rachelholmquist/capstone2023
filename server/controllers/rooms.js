const {Rooms} = require('../models/room')

module.exports = {
    getAllRooms: async(req, res) => {
        try{
            const rooms = await Rooms.findAll()
            res.status(200).send(rooms)
        } catch(error) {
            console.log(error)
            res.sendStatus(400)
        }
    }
}
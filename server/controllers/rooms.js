const {Rooms} = require('../models/room')

module.exports = {
    getAllRooms: async(req, res) => {
        console.log('test')
        try{
            const rooms = await Rooms.findAll()
            console.log(rooms);
            res.status(200).send(rooms)
        } catch(error) {
            console.log('ERROR IN getAllRooms', error)
            res.sendStatus(400)
        }
    },
    getConsoleLog: async(req, res) => {
        console.log("We made it to rooms controller", req);
    }
}
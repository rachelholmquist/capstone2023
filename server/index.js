const express = require("express");
const cors = require('cors')
const { sequelize } = require("./util/database");
const { addUser } = require('./controllers/auth')
const { getActivities } = require("./controllers/activityList");
const { getAllRooms } = require("./controllers/rooms");
const { Users } = require('./models/user')
const { getTripItinerary, addTripItinerary, deleteTrip } = require("./controllers/getTripItinerary");
const {tripItinerary} = require("./models/tripItinerary");
const app = express();

app.use(express.json())
app.use(cors())

Users.hasMany(tripItinerary)

app.get('/', () => {console.log('Made it home')});
app.get('/activities', getActivities)
app.get('/room', getAllRooms)
app.get('/tripItinerary', getTripItinerary)
app.post('/tripItinerary', addTripItinerary)
app.delete('/tripItinerary/:id', deleteTrip)
app.post('/user', addUser)


sequelize
  .sync()
  .then(() => {
    app.listen(4042, () => console.log(`server running on ` + 4042));
  })
  .catch((err) => console.log(err));
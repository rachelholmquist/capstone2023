const express = require("express");
const cors = require('cors')

const { sequelize } = require("./util/database");
const { Users } = require('./models/user')
const { TripItinerary} = require('./models/tripItinerary')
const { getActivities } = require("./controllers/activityList");
const { getAllRooms } = require("./controllers/rooms");
const { getTripItinerary, addTripItinerary, deleteTrip } = require("./controllers/getTripItinerary")
const { register, login } = require('./controllers/auth')
const app = express();

app.use(express.json())
app.use(cors())

// Users.hasMany(TripItinerary)

app.get('/', () => {console.log('Made it home')});
app.get('/activities', getActivities)
app.get('/room', getAllRooms)
app.get('/tripItinerary', getTripItinerary)
app.post('/tripItinerary', addTripItinerary)
app.delete('/tripItinerary/:id', deleteTrip)
app.post('/register', register)
app.post('/login', login)


sequelize
  .sync()
  .then(() => {
    app.listen(4042, () => console.log(`server running on ` + 4042));
  })
  .catch((err) => console.log(err));
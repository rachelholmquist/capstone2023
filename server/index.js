require("dotenv").config();

const express = require("express");
const cors = require('cors')

const { sequelize } = require("./util/database");
const { getActivities } = require("./controllers/activityList");
const { getAllRooms } = require("./controllers/rooms");
const { getTripItinerary, addTripItinerary, deleteTrip } = require("./controllers/getTripItinerary")
const app = express();

app.use(express.json())
app.use(cors())

app.get('/', () => {console.log('Made it home')});
app.get('/activities', getActivities)
app.get('/room', getAllRooms)
app.get('/tripItinerary', getTripItinerary)
app.post('/tripItinerary', addTripItinerary)
app.delete('/tripItinerary/:id', deleteTrip)

try {
  sequelize.authenticate();
  console.log('connection has been established successfully');

} catch (error) {
  console.error('unable to connect to database:', error);
}

sequelize
  .sync()
  .then(() => {
    app.listen(4042, () => console.log(`server running on ` + 4042));
  })
  .catch((err) => console.log(err));
require("dotenv").config();

const express = require("express");
const cors = require('cors')

const { sequelize } = require("./util/database");
const {getAllRooms} = require('./controllers/rooms') 
const app = express();

app.use(express.json())
app.use(cors())

app.get('/rooms', getAllRooms)

try {
  sequelize.authenticate();
  console.log('connection has been established successfully');

} catch (error) {
  console.error('unable to connect to database:', error);
}

sequelize
  .sync()
  .then(() => {
    app.listen(5432, () => console.log(`server running on ` + 5432));
  })
  .catch((err) => console.log(err));
require("dotenv").config();

const {PORT} = process.env;
const express = require("express");
const cors = require('cors')

const { sequelize } = require("./util/database");

const app = express();

app.use(express.json())
app.use(cors())

sequelize
  .sync()
  .then(() => {
    app.listen(`${PORT}`, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err));
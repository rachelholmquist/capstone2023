require("dotenv").config();

const {PORT} = process.env;
const express = require("express");

const { sequelize } = require("./util/database");

const app = express();

sequelize
  .sync()
  .then(() => {
    app.listen(`${PORT}`, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err));
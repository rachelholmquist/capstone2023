require("dotenv").config();

const express = require("express");
const cors = require("cors");

const {PORT} = process.env;

sequelize
  .sync()
  .then(() => {
    app.listen(`${PORT}`, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err));
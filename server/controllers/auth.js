const {Users} = require('../models/user')
const bcrypt = require("bcrypt");


module.exports = {

addUser: async (req, res) => {
  try {
      const { username, password, email} = req.body.user;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);  
      await Users.create({username, hashedPass: hash, email})
      res.sendStatus(200)
  } catch (error) {
      console.log(error);
      res.sendStatus(400);
  }
}}
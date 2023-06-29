const {Users} = require('../models/user')
const bcrypt = require("bcrypt");
module.exports = {
  

addUser: async (req, res) => {
  try {
    console.log(req.body)
      const { username, password, email} = req.body.user;
      const salt = bcrypt.genSaltSync(10);
      console.log(password, salt)
      const hash = bcrypt.hashSync(password, salt);  
      console.log(hash)
      await Users.create({username, hashedPass: hash, email})
      res.sendStatus(200)
  } catch (error) {
      console.log("Error in post request");
      console.log(error);
      res.sendStatus(400);
  }
}}
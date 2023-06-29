const { Users } = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = "sunshine";

const createToken = (username, id) => {
    return jwt.sign(
      {
        username,
        id
      },
      SECRET,
      {
        expiresIn: "2 days",
      }
    );
  };
  module.exports = {
    register: async (req, res) => {
      try {
        const { userName, password, firstName, lastName, address, email, phone} = req.body;
        const foundUser = await Users.findOne({ where: { userName } });
        if (foundUser) {
          res.status(400).send("cannot create user");
        } else {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(password, salt);
          const newUser = await Users.create({ userName, hashedPass: hash, firstName, lastName, address, email, phone });
          const token = createToken(
            newUser.dataValues.userName,
            newUser.dataValues.id
          );
          console.log("TOKEN", token);
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          res.status(200).send({
            userName: newUser.dataValues.username,
            userId: newUser.dataValues.id,
            token,
            exp,
          });
        }
      } catch (error) {
        console.log("ERROR IN register");
        console.log(error);
        res.sendStatus(400);
      }
    },
  
    login: async (req, res) => {
      try {
        const { userName, password} = req.body;
        let foundUser = await Users.findOne({ Where: { userName } });
        if (foundUser) {
          const isAuthenticated = bcrypt.compareSync(
            password,
            foundUser.hashedPass
          );
  
          if (isAuthenticated) {
            const token = createToken(
              foundUser.dataValues.username,
              foundUser.dataValues.id
            );
            const exp = Date.now() + 1000 * 60 * 60 * 48;
            res.status(200).send({
              username: foundUser.dataValues.username,
              userId: foundUser.dataValues.id,
              token,
              exp,
            });
          } else {
            res.status(400).send("cannot log in");
          }
        } else {
          res.status(400).send("cannot log in");
        }
      } catch (error) {
        console.log("ERROR IN register");
        console.log(error);
        res.sendStatus(400);
      }
    },
  };
  
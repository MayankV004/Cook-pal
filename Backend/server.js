const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userModel = require("./models/User");

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to DB
mongoose.connect("mongodb://localhost:27017/Cookpal");

app.post("/register", (req, res) => {
   userModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/login",  (req, res) => {
  let { email, password } = req.body;
   userModel.findOne({ email: email }).then((user) => {
    if (!user) {
      res.json("User does not exist");
    } else {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is incorrect");
      }
    }
  });
});

app.listen(3001, () =>
  console.log("Server is running on port 3000")
);

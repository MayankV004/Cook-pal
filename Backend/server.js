const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userModel = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const DB = require("./config/mongoose-connection")
const authenticateToken = require("./middlewares/authToken")
const app = express();

// Middlewares

app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET" , "POST" , "PUT" , "PATCH" ,"DELETE"],
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to DB
DB();

app.post("/register", (req, res) => {
  let { name, email, password } = req.body;
  bcrypt.genSalt(10 , (err,salt) =>{
    if(err) return res.status(500).json({ error : "Error in password hashing"})

    bcrypt.hash(password , salt , (err,hash) =>{
      if(err) return res.status(500).json({ error : "Error in password hashing"})

      userModel
      .create({
        name,
        email,
        password: hash,
      })
      .then((user) => {
        res.status(201).json({ message : "User registered Succesfully"});
      })
      .catch((err) => {
        res.status(400).json({ error : err.message});
      });
    })
  }) 
  
 
});

app.post("/login",async (req, res) => {
  const { email, password } = req.body;
  try
  {
    const user = await userModel.findOne({ email });
    if(!user) return res.status(404).json({ error : "User not found"});

    const isPasswordValid = await bcrypt.compare(password , user.password);

    if(!isPasswordValid) return res.status(401).json({ error : "Invalid Password"});

    //token Creation
    const token = jwt.sign({email : user.email , _id : user._id} , process.env.SECRET_KEY, { expiresIn : "24h"});

    // Set cookies
    res.cookie("token" , token , {
      httpOnly:true ,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });
    res.json({ message : "Login Successful"})
  }catch(err)
  { 
    res.status(500).json({ error : "Server error"})

  }
});

app.get("/logout",authenticateToken ,(req, res) => {
  
  // Clearing the cookies
  res.cookie("token" , "" , {
    httpOnly:true ,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0)
  })
  res.redirect("/");
})



app.listen(process.env.PORT, () =>
  console.log("Server is running on port 3000")
);

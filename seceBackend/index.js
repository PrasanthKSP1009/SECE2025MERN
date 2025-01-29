const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
  });

const verifyToken = (req, res, next) => {
  console.log("Middlewate is triggred");
  var token = req.headers.authorization
  if (!token) {
    res.send("Request Denied");
  }
  try {
    const user = jwt.verify(token,process.env.SECRET_KEY);
    console.log(user);
    req.user = user
  } catch (error) {
    console.log(error);
    res.send("Error in Token")
  }
  next();
};
app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\nYour Roller coster starts from now on\nFasten your codebase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/json',verifyToken,(req,res)=>{
  console.log("inside json route");
  res.json({message:"This is a middleware check",user:req.user.username})
})

app.post("/signup", async (req, res) => {
  console.log(req.body);
  var { firstName, lastName, username, email, password } = req.body;
  var hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  try {
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedPassword,
    });
    newSignup.save();
    res.status(201).json({ response: "Signup Successful", signupStatus: true });
  } catch (error) {
    res.status(400).send("Signup Unsuccessful", error);
  }
});
app.get("/getsignupdet", async (req, res) => {
  var signUpdet = await Signup.find();
  res.status(200).json(signUpdet);
});
app.post("/updatedet", async (req, res) => {
  var updateRec = await Signup.findOneAndUpdate(
    { username: "abi290" },
    { $set: { username: "abi2006" } }
  );
  console.log(updateRec);
  updateRec.save();
  res.json("Record Updated");
});

app.post("/login", async (req, res) => {
  var { email, password } = req.body;
  try {
    var existingUser = await Signup.findOne({ email });
    //console.log(existingUser);
    if (existingUser) {
      const payload = {
        email: existingUser.email,
        username: existingUser.username,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1hr",
      });
      console.log(token);
      var isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      // console.log(password,await bcrypt.hash(password,10),existingUser.password, isPasswordCorrect);
      if (isPasswordCorrect) {
        res.status(201).json({
          message: "Login Successful",
          isLoggedIn: true,
          token: token,
        });
      } else {
        res.status(201).json({ message: "Invalid Cred", isLoggedIn: false });
      }
    } else {
      res.status(400).json({
        message: "User Not Found Please Signup!!!",
        isLoggedIn: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error Occured" });
  }
});

app.listen(3001, () => {
  console.log("Server Started");
});

const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const e = require("express");

const app = express();
dotenv.config();
app.use(express.json());

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
  });

app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\nYour Roller coster starts from now on\nFasten your codebase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", (req, res) => {
  var { firstName, lastName, username, email, password } = req.body;
  try {
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    });
    newSignup.save();
    res.status(201).send("Signup Successful");
  } catch (error) {
    res.status(400).send("Signup Unsuccessful", error);
  }
});
app.get("/getsignupdet", async (req, res) => {
  var signUpdet = await Signup.find();
  res.status(200).json(signUpdet);
});
app.post("/updatedet", async(req, res) => {
  var updateRec = await Signup.findOneAndUpdate(
    { username: "abi290" },
    { $set: { username: "abi2006" } }
  );
  console.log(updateRec);
  updateRec.save()
  res.json("Record Updated")
});

app.listen(3001, () => {
  console.log("Server Started");
});

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://orrin2op:RhQZLEvdtcaDR8P6@cluster0.f7bdlrn.mongodb.net/?retryWrites=true&w=majority');

// reels schema
const reelSchema = mongoose.Schema({
  link:String
})
// signup schema
const signupSchema = mongoose.Schema({
  mobemail:{
    type:String,
  },
  fullname:{
    type:String,
  },
  username:{
    type:String,
  },
  password:{
    type:String,
  }
})


const reelModel = mongoose.model("reel1",reelSchema);
const usersInsta = mongoose.model("usersinsta",signupSchema);

// static files path
const staticFolderPath = path.join(__dirname, 'public');

// Serve static files
app.use(express.static(staticFolderPath));
app.use(express.urlencoded({extended:true}));

// set view engine ejs
app.set('view engine', 'ejs');

// "/" route
app.get("/",(req,res)=>{
  res.render("signup")
})
app.get("/login",(req,res)=>{
  res.render("login")
})

app.get("/reel",(req,res)=>{
  reelModel.find({}).then(function(reel){
    res.render("index",{reel});
  }).catch(function(err){
    console.log(err);
  })
})

app.post("/signup",async(req,res)=>{
  const mobemail = req.body.mobemail;
  const fullname = req.body.fullname;
  const username = req.body.username;
  const password = req.body.password;

  const newUserInsta = new usersInsta({
    mobemail:mobemail,
    fullname:fullname,
    username:username,
    password:password
  })

  await newUserInsta.save();
  res.redirect("/login")
})

app.post("/login", async (req, res) => {
  const mobemail = req.body.mobemail;
  const password = req.body.password;
  const tempData = await usersInsta.find({ mobemail });

  if (tempData.length > 0) {
    const user = tempData[0];
    if (password === user.password) {
      res.redirect('/reel');
    } else {
      res.send('Wrong password!!');
    }
  } else {
    res.send("User not found");
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

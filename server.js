const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://orrin2op:RhQZLEvdtcaDR8P6@cluster0.f7bdlrn.mongodb.net/?retryWrites=true&w=majority');
const reelSchema = mongoose.Schema({
  link:String
})
const reelModel = mongoose.model("reels",reelSchema);

// static files path
const staticFolderPath = path.join(__dirname, 'public');

// Serve static files
app.use(express.static(staticFolderPath));

// set view engine ejs
app.set('view engine', 'ejs');

// "/" route
app.get("/",(req,res)=>{
  res.render("signup")
})

app.get("/reel",(req,res)=>{
  reelModel.find({}).then(function(reel){
    res.render("index",{reel});
  }).catch(function(err){
    console.log(err);
  })
})

app.post("/signup",(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

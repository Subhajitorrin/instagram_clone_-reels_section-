const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// static files path
const staticFolderPath = path.join(__dirname, 'public');

// Serve static files
app.use(express.static(staticFolderPath));

// set view engine ejs
app.set('view engine', 'ejs');

// "/" route
app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

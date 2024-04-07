const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line

const app = express();
require("./models")
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Use CORS middleware
app.use(cors());

// Route
app.use('/api',require("./routes/api"))

app.listen(3001,()=>{
    console.log("server is running at 3001")
})

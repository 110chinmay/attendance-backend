require('dotenv').config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
require("./models");

// Use express.json() and express.urlencoded() instead of bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use CORS middleware
app.use(cors());

// Route
app.use('/api', require("./routes/api"));

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});


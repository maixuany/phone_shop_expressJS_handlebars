const express = require('express');
const connectDB = require('./services/mongoDB');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 8080

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
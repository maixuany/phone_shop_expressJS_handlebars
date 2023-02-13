const express = require('express');
const {engine} = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./services/mongoDB');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))
app.engine('hbs', engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
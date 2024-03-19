//Basic rest structure is created in this file
const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv');
const connect = require("./config/db"); 
//dotenv config

dotenv.config();

//mongo db

connect();


//rest objects 

const app = express()


//middlewares

app.use(morgan('dev'))
app.use(express.json())


//routes / API functionalities are defined through routes and further flow
app.use(('/api/v1/user'), require('./routes/userRoutes'))
app.use(('/api/v1/admin'), require('./routes/adminRoutes'))
app.use(('/api/v1/doctor'), require('./routes/doctorRoutes'))


//PORT 
const port =  process.env.PORT || 8080

//listen port
  
app.listen(port, ()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Node on port ${process.env.PORT}`.bgCyan.white)
})
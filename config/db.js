const mongoose = require("mongoose")
const colors = require("colors")

const connect  = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDb connected ${mongoose.connection.host}`.bgGreen.white)
    }catch(error){
        console.log(`Error encountered ${error}`.bgRed.white)
    }
}

module.exports = connect 
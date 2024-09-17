require('dotenv').config()
const mongodb = require('mongodb');

const connectToDB = async () => {
    //Attempting to connect to db
    await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to DB from Conn: ${process.env.MONGO_URI}`);
    }

module.exports = connectToDB
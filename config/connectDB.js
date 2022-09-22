const mongoose = require('mongoose');

const mongooseURL = process.env.DATABASE_URL;

const connectDB = async() => {
    try{
        await mongoose.connect(mongooseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('database connected!');
    }catch(err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
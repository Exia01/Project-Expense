const mongoose = require('mongoose')

let uri_admin = process.env.MONGO_URI;

// let uri_local = process.env.MONGO_URI_ATLAS;
let uri_elh = process.env.MONGO_URI_ELH;

mongoose.set('useFindAndModify', false);

const uri = process.env.DATABASE_URL;
const mongooseConnection = async () => {
    try {
        await mongoose.connect(uri_elh, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch(err) {
        console.log(err.message);
        // Exit Process with failure
        process.exit(1);
    }
};

module.exports = mongooseConnection;

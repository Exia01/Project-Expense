const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    models = path.join(__dirname, '../models');

let uri_admin = process.env.MONGO_URI;
let uri_local = process.env.MONGO_URI_ATLAS;

mongoose.set('useFindAndModify', false);

const mongooseConnection = async () => {
    try {
        await mongoose.connect(uri_admin, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          // autoReconnect: true,
          // reconnectTries: 2,
          // reconnectInterval: 3000
        });
        console.log("Database Connecting ...");
    } catch(err) {
        console.log(err.message);
        // Exit Process with failure
        process.exit(1);
    }
};

module.exports = mongooseConnection;
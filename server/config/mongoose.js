const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    models = path.join(__dirname, '../models');

mongoose.set('useFindAndModify', false);

const uri = process.env.ATLAS_URI;
const mongooseConnection = async () => {
    await mongoose.connect(uri, {
            useNewUrlParser: true,
            autoReconnect: true,
            reconnectTries: 2,
            reconnectInterval: 3000,
            useCreateIndex:true
        }
    );
};
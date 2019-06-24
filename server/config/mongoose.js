const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    models = path.join(__dirname, '../models');

mongoose.set('useFindAndModify', false);

const mongooseConnection = async () => {
    await mongoose.connect(
        `mongodb+srv://admin:WVm6fwYgsLyvOvHl@main-cluster-hpysy.mongodb.net/test?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            autoReconnect: true,
            reconnectTries: 2,
            reconnectInterval: 3000
        }
    );
};
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

const uri = process.env.DATABASE_URL;
const mongooseConnection = async () => {
    return await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
    );
};

module.exports = {
    mongooseConnection: mongooseConnection
};

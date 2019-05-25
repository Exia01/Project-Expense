const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const favicon = require('express-favicon');
const app = express();
const PORT = 5000;



//Mongoose connection --> need import from config
// mongooseConnector.mongooseConnection().then((res) => {
//   console.log('Connected to DB \n');
// })
// .catch(err => {
//   console.log('ERROR', err.message);
// });


app.listen(PORT, function(){
	console.log(`Server Listening on port ${PORT}`);
});

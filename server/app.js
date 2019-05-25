const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const favicon = require('express-favicon');
// const mongooseConnector = require('./config/mongoose.js')
const reportRoutes = require('./config/reportRoutes.js');
const PORT = 5000;
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// views and static files
app.set('views', path.join(__dirname, '/client/public/views'));
app.use(express.static(path.join(__dirname, '/client/public/assets/css')));
app.use(express.static(path.join(__dirname, '/client/public/assets/js')));

//Mongoose connection --> need import from config
// mongooseConnector.mongooseConnection().then((res) => {
//   console.log('Connected to DB \n');
// })
// .catch(err => {
//   console.log('ERROR', err.message);
// });

app.use('/', reportRoutes);

app.listen(PORT, function() {
	console.log(`Server Listening on port ${PORT}`);
});
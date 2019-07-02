const express 				= require('express');
const path 					= require('path');
// const favicon = require('express-favicon');
// const mongooseConnector = require('./config/mongoose')
const reportRoutes 			= require('./server/routes/reportRoutes');
const generateRoutes		= require('./server/routes/generateRoutes')
const accountRoutes 		= require('./server/routes/accountRoutes');
const multer 				= require('multer');
const passport          	= require('passport');
const fs 					= require('fs');
const PORT 					= process.env.PORT || 8000;

const app = express();


// EJS Templating
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./client/public'));

//Passport Configuration
app.use(
	require('express-session')({
		secret: 'This That Those Then True',
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());


//Express body parser
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
	// This block of code will read from the "example.csv" file.
	// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
	// The code will store the contents of the reading inside the variable "data"

	// Read our test file into the buffer
	fs.readFile('things.txt', 'utf8', function (err, data) {
	// If there is an error, Log it
	if (err) {
		console.log('Read Failed')
		return console.log(err)
	}
	// Let's see the data
	console.log('Data: ' + data)
	// console.log("---------------");
	// console.log(data);

	// Then split it by commas (to make it more readable)
	var dataArr = data.split(',')

	// We will then re-display the content as an array for later use.
	console.log("Data Array: " + dataArr)
	});

	// Break the string down by comma separation and store the contents into the output array.
	var output = data.split(',')

	// Loop Through the newly created output array
	for (var i = 0; i < output.length; i++) {
		// Print each element (item) of the array/
		console.log(output[i]);
	}

	res.send('Root Route');

});

//Multer Storage
// ('./server/utils/multerStorage.js')
//Mongoose connection --> need import from config
// mongooseConnector.mongooseConnection().then((res) => {
//   console.log('Connected to DB \n');
// })
// .catch(err => {
//   console.log('ERROR', err.message);
// });

app.use('/report', reportRoutes);
app.use('/accounts', accountRoutes);
app.use('/read', generateRoutes);

app.listen(PORT, () => {
	console.log(`Server Listening on port ${PORT}`);
});

// Passport npm: https://www.npmjs.com/package/passport
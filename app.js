require('dotenv').config({path: __dirname + '/server/config/.env'}) //env file setup in config
const express 				= require('express');
const path 					= require('path');
// const favicon = require('express-favicon');
const cors 					= require('cors');
const multer 				= require('multer');
const passport          	= require('passport');
const fs 					= require('fs');
const mongoose 				= require('mongoose');
const mongooseConnector 	= require('./server/config/mongoose')
const PORT 					= process.env.PORT || 8000;



// Create an instance of Express
const app = express();



app.use(cors()); //enables CORS 

// EJS Templating
app.set('view engine', 'ejs');
app.use(express.json()); //enables parsing of json

//Express body parser --> not needed in the new version of express.

// views and static files
app.set('views', path.join(__dirname, '/client/public/views/'));
app.use(express.static('./client/public/views/'));


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
	
	
	
	//Multer Storage=
	// ('./server/utils/multerStorage.js')
	mongooseConnector.mongooseConnection().then((res) => {
		console.log('Connected to DB \n');
	})
	.catch(err => {
		console.log('ERROR', err.message);
	});
	
	const reportRoutes 			= require('./server/routes/reportRoutes');
	const generateRoutes		= require('./server/routes/generateRoutes')
	const accountRoutes 		= require('./server/routes/accountRoutes');

	const routes 			= require('./server/api/')


	app.use('/', reportRoutes);
	// *** Temp Route for Testing data conversion *** //
	// app.use('/report', reportRoutes);
	app.use('/accounts', accountRoutes);
	app.use('/read', generateRoutes);

	app.use('/api/files', routes.file)
	
	
	app.listen(PORT, () => {
		console.log(`Server Listening on port ${PORT}`);
	});
	
	// Passport npm: https://www.npmjs.com/package/passport
	//implement cors: https://enable-cors.org/server_expressjs.html
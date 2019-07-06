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

// Create an instance of Express
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

//Multer Storage=
// ('./server/utils/multerStorage.js')
//Mongoose connection --> need import from config
// mongooseConnector.mongooseConnection().then((res) => {
//   console.log('Connected to DB \n');
// })
// .catch(err => {
//   console.log('ERROR', err.message);
// });

app.use('/', reportRoutes);
app.use('/report', reportRoutes);
app.use('/accounts', accountRoutes);
app.use('/read', generateRoutes);

app.listen(PORT, () => {
	console.log(`Server Listening on port ${PORT}`);
});

// Passport npm: https://www.npmjs.com/package/passport
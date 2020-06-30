const PORT 					= process.env.PORT || 8000;
const express 				= require('express');
const path 					= require('path');
require('dotenv').config({ path: __dirname + '/server/config/.env' });
// const favicon = require('express-favicon');
// const mongooseConnector = require('./config/mongoose')

const authRoutes				= require('./server/routes/api/auth');
const userRoutes			= require('./server/routes/api/users');
const reportRoutes 			= require('./server/routes/reportRoutes');
const generateRoutes		= require('./server/routes/generateRoutes')
const accountRoutes 		= require('./server/routes/accountRoutes');
const multer 				= require('multer');
const morgan    			= require('morgan');
const passport          	= require('passport');
const fs 					= require('fs');
	const jwt					= require('jsonwebtoken');
const connectDB 			= require('./server/config/mongoose');

// Create an instance of Express
const app = express();

///cors middleware
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

// EJS Templating
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./client/public'));
// app.use(express.static('./client/public'));

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
// app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: false}));

// Logging Middleware
app.use(morgan('dev'));
// app.use(morgan('combined'));

//Multer Storage=
// ('./server/utils/multerStorage.js')
//Mongoose connection --> need import from config
// mongooseConnector.mongooseConnection().then((res) => {
//   console.log('Connected to DB \n');
// })
// .catch(err => {
//   console.log('ERROR', err.message);
// });
connectDB();

app.use('/', reportRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// *** Temp Route for Testing data conversion *** //
// app.use('/report', reportRoutes);
app.use('/accounts', accountRoutes);
app.use('/read', generateRoutes);

app.listen(PORT, () => {
	console.log(`Server Listening on port ${PORT}`);
});

// Passport npm: https://www.npmjs.com/package/passport
//implement cors: https://enable-cors.org/server_expressjs.html
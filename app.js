const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to mongo db
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
  console.log('connected to db', + config.database);
});
mongoose.connection.on('error', (err) => {
  console.log('database error: ', + err);
});

const apiRoute = require('./routes/api');

const testMode = false; 
//port number for local
const port = testMode ? 3020 : process.env.PORT || 8080;
//const port = process.env.PORT || 3020;

//cors middleware
app.use(cors());

//set static folder to read angular
app.use(express.static(path.join(__dirname, 'public')));

//body-parser middleware
app.use(bodyParser.json());

//for authentication
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//api routes
app.use('/api', apiRoute);

//index route
app.get('/', (req, res) => {
  res.send('invalid end point');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//start server
var server = app.listen(port, () => {
  console.log('server started on port: ' + port);
});

require('./sockets/connection')(server);

/*||||||||||||||||||||END SOCKETS||||||||||||||||||*/

//cors in express
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function(req, res, next) {
//  Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });
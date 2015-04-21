var express 		= require('express'),
	app 			= express(),
	bodyParser     	= require('body-parser'),
	port 			= process.env.PORT || 3309;

app.use(bodyParser.json());

//routes
require('./app/routes/approutes')(app); // configure our routes

// start here
app.listen(port);               
console.log('SMonitorApp Client serves on ' + port);

// expose app           
exports = module.exports = app; 
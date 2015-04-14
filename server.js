var express 		= require('express'),
	app 			= express(),
	bodyParser     	= require('body-parser'),
	port 			= process.env.PORT || 3300;

app.use(bodyParser.json());

/*app.use(function (req, res, next) {
  console.log(Date.now());
  console.log(req.body) 
  next()
}); 
*/

//routes
require('./app/routes/approutes')(app); // configure our routes

// start here
app.listen(port);               
console.log('SMonitorApp Client serves on ' + port);

// expose app           
exports = module.exports = app; 
var SMonitorApiRoutes = require('./smonitorcrud')
Routes = function(app) {
	//generating routes for our server API
    SMonitorApiRoutes(app,'monitor');
    //default routes
    app.get('*', function(req, res) {
            res.status(404).send('Use API to get statistics!');
        });

};

module.exports = Routes;
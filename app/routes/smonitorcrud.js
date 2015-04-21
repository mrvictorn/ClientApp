var os = require('os');
getCurrStatistics = function () {
     function load(){
        var idle=0,
        cpuCount = os.cpus().length;
        load = os.loadavg();
        
        for (var i = 0,l=load.length; i<l ; i++) {
            load[i]=load[i]/cpuCount;
        };
        console.log(load[0]);
        return load;
    }

    return {
        uptime:os.uptime(),
        load:load(),
        totalmem:os.totalmem(),
        freemem:os.freemem(),
        lastTimeStamp: new Date().getTime()
    };
};


getMashineInfo = function () {
    return {
        hostname:os.hostname(),
        osType:os.type(),
        osPlatform:os.platform(),
        osArch:os.arch(),
        osVer:os.release(),
        uptime:os.uptime(),
        load:os.loadavg(),
        totalmem:os.totalmem(),
        freemem:os.freemem(),
        cpus:os.cpus(),
        nics:os.networkInterfaces(),
        lastTimeStamp: new Date().getTime()
    };
};



CrudRouteCreator = function(app,apiname) {
    app.get('/api/'+apiname, function(req, res) {// READ ALL
        res.json(getMashineInfo()); 
    })
    .get('/api/'+apiname+'/poll', function(req, res) {// READ ALL
        res.json(getCurrStatistics()); 
    });
};



/*    .post('/api/'+apiname, function(req, res) { // CREATE   
        model.createFromBody(req.body,function(err) {
            if (err) res.send(err);
            else res.json({ status: 'Document created' });
        });
    })
    .get('/api/'+apiname+'/:pers_id', function(req, res) { //READ BY ID    
        model.find({_id:req.params.pers_id}, function(err, doc) {
            if (err) res.send(err)
            else res.json(doc);
        });
    })
    .put('/api/'+apiname+'/:pers_id', function(req, res) { //UPDATE   
        model.save(req.body,req.params.pers_id,function(err) {
            if (err) res.send(err)
            else res.json({ message: 'Document '+req.params.pers_id+' updated!' });
            });
    })
    .delete('/api/'+apiname+'/:pers_id',function(req, res) { //DELETE
        model.remove({_id: req.params.pers_id}, function(err, pers) {
            if (err) res.send(err)
            else res.json({ message: 'Document '+req.params.pers_id+' successfully deleted' });
        });
    });
}
*/
module.exports = CrudRouteCreator;
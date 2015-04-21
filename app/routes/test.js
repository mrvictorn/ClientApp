//test
var os=require('os');
getCurrStatistics = function () {
    function CPUsLoad(){
        var load=0,
        cpu=os.cpus();        
        for (var i = 0; i<cpu.length ; i++) {
            total=parseFloat(cpu[i].times.idle)+parseFloat(cpu[i].times.sys)+parseFloat(cpu[i].times.user)+parseFloat(cpu[i].times.irq)+parseFloat(cpu[i].times.nice);
            load+=100*(parseFloat(cpu[i].times.idle)/total);
        };
        return 100-load/i;
    }

    return {
        uptime:os.uptime(),
        load:CPUsLoad(),
        totalmem:os.totalmem(),
        freemem:os.freemem(),
        lastTimeStamp: new Date().getTime()
    };
};


console.log(getCurrStatistics());
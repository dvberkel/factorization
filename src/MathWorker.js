(function(worker){
    var div = function(n,d){ return Math.floor(n/d); };

    worker.addEventListener("message", function(event){
        if (event.data && event.data.n) {
            var n = event.data.n;
            var d = 2;
            while (d <= n) {
                while (n % d === 0) {
                    n = div(n,d);
                    worker.postMessage({ "type" : "factor", "d" : d, "n" : event.data.n });
                }
                d += 1;
            }
            worker.postMessage({ "type" : "finish" });
        }
    });
})(this);
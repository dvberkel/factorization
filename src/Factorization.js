 (function(factors){
     var doNothing = function(){ /* do nothing */ };

     var div = function(n,d){ return Math.floor(n/d); };
     
     var factorize = function(n, onFactor, onFinish) {
         onFactor = onFactor || doNothing;
         onFinish = onFinish || doNothing;
         var result = [], d = 2;
         while (d <= n) {
             while (n % d === 0) {
                 result.push(d);
                 n = div(n,d);
                 onFactor(d);
             }
             d += 1;
         }
         onFinish();
         return result;
     };

     var FactorsWorker = function(onFactor, onFinish){
         var worker = new Worker("src/MathWorker.js");

         worker.addEventListener("message", function(event){
             var data = event.data;
             if (data.type === "factor") { onFactor(data.d); }
             if (data.type === "finish") { onFinish(); }
         });

         this.factor = function(n){
             worker.postMessage({ "n" : n });
         };
     };

     factors.of = factorize;
     factors.Worker = FactorsWorker;
})(factors);
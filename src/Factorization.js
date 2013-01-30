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
         onFinish(result);
         return result;
     };

     factors.of = factorize;
})(factors);
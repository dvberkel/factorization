 (function(factors){
    var div = function(n,d){ return Math.floor(n/d); };
    
    var factorize = function(n) {
        var result = [], d = 2;
        while (d <= n) {
            while (n % d === 0) {
                result.push(d);
                n = div(n,d);
            }
            d += 1;
        }
        return result;
    };

    factors.of = factorize;
})(factors);
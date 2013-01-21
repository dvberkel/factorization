beforeEach(function() {
    this.addMatchers({
        toBeArray: function(){
            if (this.actual.length !== arguments.length) { return false; }
            for (var index = 0, max = arguments.length; index < max; index++) {
                if (this.actual[index] !== arguments[index]) { return false; }
            }
            return true;
        }
    });
});
 
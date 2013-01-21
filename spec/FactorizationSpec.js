var expectationFactory = function(n, parameters){
    return function(){
        var object = expect(factors.of(parseInt(n, 10)));
        var method = object.toBeArray;
        method.apply(object, parameters);
    };
};

describe("factors", function(){
    var parameters = {
        2 : [2],
        3 : [3],
        4 : [2, 2],
        5 : [5],
        6 : [2, 3],
        7 : [7],
        8 : [2, 2, 2],
        9 : [3, 3],
        10 : [2, 5]
    };

    for (var n in parameters){
        it("should factor " + n + " as " + parameters[n], expectationFactory(n, parameters[n]));
    }
});
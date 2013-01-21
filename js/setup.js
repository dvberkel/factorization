(function($, factors){
    var addCharacter = function(character) {
	return function(n){
	    return "" + n + character;
	};
    };

    var stripCharacter = function(n) {
	var result = "" + n;
	result = result.substr(0, result.length - 1);
	return result;
    }

    var actions = {
	'8'  : stripCharacter,
	'48' : addCharacter(0),
	'49' : addCharacter(1),
	'50' : addCharacter(2),
	'51' : addCharacter(3),
	'52' : addCharacter(4),
	'53' : addCharacter(5),
	'54' : addCharacter(6),
	'55' : addCharacter(7),
	'56' : addCharacter(8),
	'57' : addCharacter(9),
    };

    $(function(){
	var model = new factors.model({ n : 4 });
	new factors.ui({ el : $("body"), model : model });
	
	$("body").keydown(function(event){
	    var action = actions[event.which] || function(n){ return n; };
	    
	    model.set("n", action(model.get("n")));
	});
    });
})(jQuery, factors);
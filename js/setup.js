(function($, factors){
    $(function(){
	new factors.ui({ el : $("body"), model : new factors.model({ n : 4 })});
    });
})(jQuery, factors);
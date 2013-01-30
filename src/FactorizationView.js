(function($, _, Backbone, factors, undefined){
    var FactorizationModel = Backbone.Model.extend({
        defaults : { n : 2}
    });

    var Base = Backbone.View.extend({
        template : _.template("<<%= type %>/>"),
        
        initialize : function(){
            this.render();
        },

        render : function(){
            var container = this.container();
        },

        container : function(){
            if (! this._container) {
                this._container = $(this.template({ type : this.type() }));
                this.initializeContainer.call(this._container);
                this._container.appendTo(this.$el);
            }
            return this._container;
        },

        type : function(){ return "div"; },

        initializeContainer : function(){}
    });

    var FactorizationUI = Base.extend({
        initialize : function(){
            if (! this.model) {
                this.model = new FactorizationModel();
            }
            this.render();
        },

        initializeContainer : function(){
            this.addClass("factors-ui");
        },
        
        render : function(){
            var container = this.container();
            new EntryView({ el : container, model : this.model });
            new ResultView({ el : container, model : this.model });
        }
    });

    var EntryView = Base.extend({
        initializeContainer : function(){
            this.addClass("entry");
        },

        render : function(){
            var container = this.container();
            new NumberView({ el : container, model : this.model });
        }
    });

    var NumberView = Base.extend({
        initialize : function(){
            this.model.on("change:n", this.render, this);
            this.render();
        },

        type : function(){
            return "span";
        },

        initializeContainer : function(){
            this.addClass("number");
        },

        render : function(){
            var container = this.container();
            container.text(this.model.get("n"));
        }
    });

    var ResultView = Base.extend({
        initializeContainer : function(){
            this.addClass("result");
        },

        render : function(){
            var container = this.container();
            new FactorsView({ el : container, model : this.model });
        }
    });

    var FactorsView = Base.extend({
        initialize : function(){
            this.model.on("change:n", this.render, this);
            this.render();
        },

        initializeContainer : function(){
            this.addClass("factors");
        },

        render : function(){
            var container = this.container();
            container.empty();
            container.addClass("processing");
            factors.of(this.model.get("n"), function(factor){
                new NumberView({ el : container, model : new FactorizationModel({ n : factor })});
            }, function(result){
                container.removeClass("processing");
            });
        }
    });

    factors.model = FactorizationModel;
    factors.ui = FactorizationUI;
})(jQuery, _, Backbone, factors);
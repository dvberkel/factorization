describe("FactorizationUI", function(){
    var model;

    beforeEach(function(){
        loadFixtures("viewport.html");
    });

    beforeEach(function(){
        model = new factors.model({ n : 2 });
        new factors.ui({ el : $("#viewport"), model : model });
    });

    it("should provide a .factors-ui", function(){
        expect($(".factors-ui")).toExist();
    });

    describe(".factors-ui", function(){
        it("should provide .entry", function(){
            expect($(".factors-ui .entry")).toExist();
        });

        it("should provide .result", function(){
            expect($(".factors-ui .result")).toExist();
        });

        describe(".entry", function(){
            it("should have a .number", function(){
                expect($(".factors-ui .entry .number")).toExist();
            });

            describe(".number", function(){
                it("should initially container '2'", function(){
                    expect($(".factors-ui .entry .number").text()).toBe('2');
                });

                it("should change when the model does", function(){
                    model.set("n", 3);

                    expect($(".factors-ui .entry .number").text()).toBe('3');
                });
            });
        });

        describe(".result", function(){
            it("should have a .factors-ui", function(){
                expect($(".factors-ui .result .factors")).toExist();
            });

            describe(".factors", function(){
                it("should initially one .number", function(){
                    expect($(".factors-ui .result .factors .number").size()).toBe(1);
                });

                it("should change when the model does", function(){
                    model.set("n", 4);

                    expect($(".factors-ui .result .factors .number").size()).toBe(2);
                });
            });
        });
    });
});

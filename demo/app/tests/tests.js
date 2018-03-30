var SazmandVersion = require("nativescript-sazmand-version").SazmandVersion;
var sazmandVersion = new SazmandVersion();

describe("greet function", function() {
    it("exists", function() {
        expect(sazmandVersion.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(sazmandVersion.greet()).toEqual("Hello, NS");
    });
});
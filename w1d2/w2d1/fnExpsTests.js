const assert = require("assert");  //always need this with node
const wdouble = require("./d15fnExps");  //do this for all of the functions used in the Mocha tests
const wmyMap = require("./d15fnExps");
const wtimes100 = require("./d15fnExps")


describe("double", function () {
    it("tests double 10", function () {
        assert.strictEqual(wdouble.double(10), 20);
    });
    it("tests double 0", function () {
        assert.strictEqual(wdouble.double(0), 0);
    });
    it("tests double -10", function () {
        assert.strictEqual(wdouble.double(-10), -20);
    });
});

describe("times100", function () {
    it("tests times100 10", function () {
        assert.strictEqual(wmyMap.times100(10), 1000);
    });
    it("tests times100 0", function () {
        assert.strictEqual(wmyMap.times100(0), 0);
    });
    it("tests times100 -10", function () {
        assert.strictEqual(wmyMap.times100(-10), -1000);
    });
});

describe("myMap", function () {
    const testArray = [-10, 0, 10, 20];
    it("tests myMap on double", function () {
        assert.deepStrictEqual(wtimes100.myMap(testArray, wtimes100.double), [-20, 0, 20, 40]);
    });
    it("tests myMap on times100", function () {
        assert.deepStrictEqual(wtimes100.myMap(testArray, wtimes100.times100), [-1000, 0, 1000, 2000]);
    });
})

describe("myMap", function () {
    const testArray = [-10, 0, 10, 20];
    it("tests myMap on triples anonymous function", function () {
        assert.deepStrictEqual(wmyMap.myMap(testArray ,function(num){
            return num * 3;
     }), [-30, 0, 30, 60]);
    });
    it("tests myMap on triples arrow function", function () {
        assert.deepStrictEqual(wmyMap.myMap(testArray ,function(num){
            return num * 3;
     }), [-30, 0, 30, 60]);
    });
});
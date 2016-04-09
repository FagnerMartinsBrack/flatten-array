var suite = new require("benchmark").Suite('Default');
var expect = require("expect.js");

var flattenArray = require("../src/flatten-array");

describe("[PERF] flatten-array performance", function() {
  it("should have an acceptable performance", function() {
    suite.add("default", function() {
      flattenArray([1, [2, [3, [4, [5, [6, 7]]]]]]);
    }).on("cycle", function( event ) {
      var executionsPerSecond = Math.floor( event.target.hz );
      console.log( "Executions per second: " + executionsPerSecond );
      expect(executionsPerSecond).to.be.above(1500000);
    }).run();
  }).timeout(0);
});
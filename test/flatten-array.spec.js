var expect = require("expect.js");

var flattenArray = require("../src/flatten-array");

describe("flatten-array", function() {
  it("should always return an array despite the argument", function() {
    expect(flattenArray(4)).to.be.an(Array);
    expect(flattenArray({})).to.be.an(Array);
    expect(flattenArray("")).to.be.an(Array);
    expect(flattenArray(new Date())).be.an(Array);
  });
});
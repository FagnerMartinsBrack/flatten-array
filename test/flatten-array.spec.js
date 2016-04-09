var expect = require("expect.js");

var flattenArray = require("../src/flatten-array");

describe("[UNIT] flatten-array", function() {
  it("should always return an array despite the argument", function() {
    expect(flattenArray()).to.be.an(Array);
    expect(flattenArray(null)).to.be.an(Array);
    expect(flattenArray(4)).to.be.an(Array);
    expect(flattenArray({})).to.be.an(Array);
    expect(flattenArray("")).to.be.an(Array);
    expect(flattenArray(new Date())).be.an(Array);
  });
  it("should shallow flatten an array", function() {
    expect(flattenArray([1, [2, 3]])).to.be.eql([1, 2, 3]);
  });
  it("should deeply flatten an array", function() {
    expect(flattenArray([1, [2, 3, [4, 5]]])).to.be.eql([1, 2, 3, 4, 5]);
  });
});
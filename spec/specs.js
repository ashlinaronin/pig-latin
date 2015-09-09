describe('pig-latin', function() {
  it("handles words that start with a vowel", function() {
    expect(format("art")).to.equal("artay");
  });
});

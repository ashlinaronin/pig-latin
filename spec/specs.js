describe('pigLatin', function() {
  it("handles words that start with a vowel", function() {
    expect(pigLatin("art")).to.equal("artay");
  });
});

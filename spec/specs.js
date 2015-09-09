describe('pigLatin', function() {
    it("handles words that start with a vowel", function() {
        expect(pigLatin("art")).to.equal("artay");
    });

    it("handles words that start with one consonant", function() {
        expect(pigLatin("pig")).to.equal("igpay");
    });

    it("handles words that start with two consonants", function() {
        expect(pigLatin("chat")).to.equal("atchay");
    });

    it("handles words that start with 'qu'", function() {
        expect(pigLatin("queen")).to.equal("eenquay");
    });

    it("handles words that start with a consonant and contain 'qu'", function() {
        expect(pigLatin("squeal")).to.equal("ealsquay");
    });

    it("handles words that start with 'y'", function() {
        expect(pigLatin("yes")).to.equal("esyay");
    });

    it("handles a single-letter word", function() {
        expect(pigLatin("i")).to.equal("iway");
    });
});

describe('firstVowel', function() {
    it("handles a single-character word", function() {
        expect(firstVowel("a")).to.equal(0);
    });

    it("handles a two-letter word", function() {
        expect(firstVowel("an")).to.equal(0);
    });

    it("handles a three-letter word", function() {
        expect(firstVowel("she")).to.equal(2);
    });

    it("handles a no-vowel word", function() {
        expect(firstVowel("thyrmldn")).to.equal(-1);
    });
});

describe("handleArray", function() {
    it("handles multiple word string", function() {
        expect(handleArray("I can speak Pig Latin")).to.equal("Iway ancay eakspay igPay atinLay");
    });
});

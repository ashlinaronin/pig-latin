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

var pigLatin = function(word) {
    var translatedWord;
    var firstVowelIndex = firstVowel(word);


    /* If the word starts with a vowel, just add "ay".
    ** If it starts with any number of consonants, add them to the end + "ay".*/
    if (firstVowelIndex === 0) {
        /* Add "yay" to single-vowel word. Add "ay" to longer word which starts
        ** with a vowel. */
        if (word.length === 1) {
            translatedWord = word + "way";
        } else {
            translatedWord = word + "ay";
        }
    } else {
        /* If we run into a 'qu' where the 'u' is the first vowel, include the
        ** 'u' at the end of the word. Otherwise just move consonants to the
        ** end and add "ay". */
        if (word[firstVowelIndex] === 'u' && word[firstVowelIndex - 1] === "q") {
            translatedWord = word.slice(firstVowelIndex + 1) +
                word.slice(0, firstVowelIndex + 1) + "ay";
        } else {
            translatedWord = word.slice(firstVowelIndex) +
                word.slice(0, firstVowelIndex) + "ay";
        }
    }

    return translatedWord;
};



var firstVowel = function(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];
    for (var i = 0; i < word.length; i++) {
        // If we find a vowel at this position, return this index
        if (vowels.indexOf(word[i]) !== -1) {
            return i;
        }
    }

    // We didn't find a vowel in this word... return -1
    return -1;
};

var handleArray = function(message) {
    var words = message.split(" ");
    var translatedMessage = "";
    var count = 0;

    words.forEach(function(word) {
        translatedMessage += pigLatin(word);

        // Add a space if we're not at the end of the sentence
        if (count !== words.length-1) {
            translatedMessage += " ";
        }
        count++;
    });
    return translatedMessage;
};

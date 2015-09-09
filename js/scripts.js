var pigLatin = function(message) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var translatedMessage;
    var firstVowelIndex = firstVowel(message);


    /* If the word starts with a vowel, just add "ay".
    ** If it starts with any number of consonants, add them to the end + "ay".*/
    if (firstVowelIndex == 0) {
        translatedMessage = message + "ay";
    } else {
        translatedMessage = message.slice(firstVowelIndex) +
            message.slice(0, firstVowelIndex) + "ay";
    }
    return translatedMessage;
};



var firstVowel = function(message) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < message.length; i++) {
        // If we find a vowel at this position, return this index
        if (vowels.indexOf(message[i]) !== -1) {
            return i;
        }
    }

    // We didn't find a vowel in this word... return -1
    return -1;
};

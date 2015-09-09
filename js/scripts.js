var pigLatin = function(message) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var firstChar = message.charAt(0);
    var translatedMessage;


    // If first char is a consonant, move it to the end and add "ay"
    if (vowels.indexOf(firstChar) === -1) {

        // If second char is a consonant...
        if (vowels.indexOf(message.charAt(1)) === -1) {
            translatedMessage = message.slice(2) + message.slice(0, 2) + "ay";
        } else {
            translatedMessage = message.slice(1) + firstChar + "ay";
        }

    }  else {
        // If first char is not a consonant, add "ay"
        translatedMessage = message + "ay";
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

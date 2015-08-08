var text = 'Problem 3. Occurrences of a word' +
    'Write a function that finds all the occurrences of word in a text.' +
    '    The search can be case sensitive or case insensitive.' +
    '    Use function overloading.';

function occurrencesOfWord(word, text, caseIncensitive){
        if (caseIncensitive === true){
        word = word.toLowerCase();
        text = text.toLowerCase();
    }

    var index = text.indexOf(word),
        count = 0;
    while (index >= 0){
        count += 1;
        if (((text[index + word.length] >= 'a' && text[index + word.length] <= 'z') || (text[index - 1] >= 'a' && text[index - 1] <= 'z'))
        || ((text[index + word.length] >= 'A' && text[index + word.length] <= 'Z') || (text[index - 1] >= 'A' && text[index - 1] <= 'Z'))){
            count -= 1;
        }
        index = text.indexOf(word, index + 1);
        }
    return count;
}

console.log(occurrencesOfWord('a', text, true));
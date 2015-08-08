//Problem 10. Find palindromes
//
//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

var text = 'Lorem ipsum dolor ABBA sit amet, lamal consectetur adipiscing exe elit. Curabitur lacinia magna ut erat venenatis suscipit.';

function findPalidromes(text){
    var words = text.split(' '),
        wordReversed = '',
        result = [];
    for (var i = 0; i < words.length; i++) {

        for (var j = 0; j < words[i].length; j++) {
            wordReversed += words[i][words[i].length - 1 - j];
        }
        if (wordReversed == words[i]){
            result.push(words[i]);
        }
        wordReversed = '';
    }
    return result;
}
console.log(findPalidromes(text).join(', '));


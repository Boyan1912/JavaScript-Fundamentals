// Write a script that compares two char arrays lexicographically (letter by letter).

var charArrOne = 'someRandomnChars' + 'sameChars',
    charArrTwo = 'anotherCharArray' + 'sameChars',
    length,
    i;
charArrOne.length > charArrTwo.length ? length = charArrOne.length : length = charArrTwo.length;
for (i = 0; i < length; i++){
    var value;
    charArrOne[i] > charArrTwo[i] ? value = ' is larger than ' : charArrOne[i] === charArrTwo[i] ?
    value = ' is equal to ' : value = ' is smaller than ';

    console.log('"' + charArrOne[i] + '"' + ' at index ' + i + value + '"' + charArrTwo[i] + '"' + ' at index ' + i + ' in Array 2.');
}
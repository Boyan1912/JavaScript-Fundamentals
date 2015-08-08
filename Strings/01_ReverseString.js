//Problem 1. Reverse string
//
//Write a JavaScript function that reverses a string and returns it.

    var text = 'sample';
function reverseString(text){
    var result = '',
        i;
    for (i = text.length - 1; i >= 0; i -= 1){
        result += text[i];
    }
    return result;
}
console.log(reverseString(text));

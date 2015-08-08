//Problem 5. nbsp
//
var text = 'Write a function that replaces non breaking white-spaces in a text with &nbsp;';

function replaceSpaces(text){
    return text.replace(/ /g, '&nbsp;');
}
console.log(replaceSpaces(text));


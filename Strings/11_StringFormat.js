//Problem 11. String format
//
//Write a function that formats a string using placeholders.
//    The function should work with up to 30 placeholders and all types.

function stringFormat(text){
    var placeHolders = [],
        i;

    for (i = 0; i < arguments.length; i++) {
        var placeHolder = '\\{' + i + '}';
        placeHolders.push(placeHolder);
    }
    for (i = 0; i < arguments.length; i++) {
        text = text.replace(new RegExp(placeHolders[i], 'g'), arguments[i + 1]);
    }
    return text;
}

var str = stringFormat('Hello {0}!', 'Peter');
console.log(str);
var frmt = '{0}, {1}, {0} text {2}';
var str2 = stringFormat(frmt, 1, 'Pesho', 'Gosho');
console.log(str2);


//Problem 1. Format with placeholders
//
//    Write a function that formats a string. The function should have placeholders, as shown in the example
//      Add the function to the String.prototype

String.prototype.format = function(obj){
    var placeHolders = this.match(/#{\w+}/g),
        prop,
        result = this;

    for (var i = 0; i < placeHolders.length; i++) {

        prop = placeHolders[i].substring(2, placeHolders[i].length - 1);
        if (obj[prop]){
            result = result.replace(placeHolders[i], obj[prop]);
        }
    }
    return result;
};

var options = {name: 'John'};
console.log('Hello, there! Are you #{name}?'.format(options));

var options2 = {name: 'John', age: 13};
console.log('My name is #{name} and I am #{age}-years-old'.format(options2));


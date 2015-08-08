//2. Reverse number
//
//Write a function that reverses the digits of given decimal number.

function reverseNumber(number){
    number = number + '';
    var i,
        reversed = '';
    for (i = 0; i < number.length; i++){
        reversed += number[number.length - 1 - i];
    }
    return +reversed;
}

console.log(reverseNumber(1234567890));
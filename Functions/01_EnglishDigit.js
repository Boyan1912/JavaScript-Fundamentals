//Problem 1. English digit
//
//Write a function that returns the last digit of given integer as an English word.

function readDigit(number){
    var digit = number % 10;
    switch (digit){
        case 0: return 'Zero'; break;
        case 1: return 'One'; break;
        case 2: return 'Two'; break;
        case 3: return 'Three'; break;
        case 4: return 'Four'; break;
        case 5: return 'Five'; break;
        case 6: return 'Six'; break;
        case 7: return 'Seven'; break;
        case 8: return 'Eight'; break;
        case 9: return 'Nine'; break;
        default : return 'This is not a number'; break;
    }
}
var arr = [512, 1024, 12309, 100, 207],
    i;
for (i = 0; i < arr.length; i++){
    console.log(arr[i] + ' : ' + readDigit(arr[i]));
}

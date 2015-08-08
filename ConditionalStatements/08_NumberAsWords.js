// Write a script that converts a number in the range [0-999] to words, corresponding to its English pronunciation.

var numbers = [0, 9, 10, 12, 19, 25, 98, 273, 400, 501, 617, 711, 999];

var singleDigit = function (number){
    number = +number;
    switch (number){
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
        default : return 'It\'s not a number'; break;
    }
}
var twoDigits = function(number){
    number = number + '';
    var result,
        secondDigit = singleDigit(number[1]);
    switch (number[0]){
        case '1': switch (number[1]){
            case '0': result = 'Ten'; break;
            case '1': result = 'Eleven'; break;
            case '2': result = 'Twelve'; break;
            case '3': result = 'Thirteen'; break;
            case '5': result = 'Fifteen'; break;
            default : result = singleDigit(number[1]) + 'teen'; break;
        }break;
        case '2': result = 'Twenty'; break;
        case '3': result = 'Thirty'; break;
        case '5': result = 'Fifty'; break;
        default : result = singleDigit(number[0]) + 'ty'; break;
    }
    if (number > '20' && number[1] !== '0'){
        result += (' ' + secondDigit);
    }
    return result;
}

var threeDigits = function(number){
    number = number + '';
    var result,
        firstDigit = +number[0],
        secondDigit = +number[1],
        thirdDigit = +number[2],
        lastTwoDigits = number[1] + number[2];
    result = singleDigit(firstDigit) + ' Hundred';
    if (secondDigit){
        result += (' and ' + twoDigits(lastTwoDigits));
    }else if (thirdDigit){
        result += (' and ' + singleDigit(thirdDigit));
    }
return result;
}

var determineFunctionExecution = function(number){
    number = number + '';
    switch (number.length){
        case 1: return singleDigit(number); break;
        case 2: return twoDigits(number); break;
        case 3: return threeDigits(number); break;
        default : return 'Not a valid number';break;
    }
}
for (var i = 0; i < numbers.length; i++){
    var result = determineFunctionExecution(numbers[i]);
    console.log(numbers[i] + ' : ' + result);
}

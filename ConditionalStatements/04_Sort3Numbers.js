/*
 Sort 3 real values in descending order.
 Use nested if statements.
*/
var a = 0,
    b = -2.5,
    c = 5,
    maxNumber,
    midNumber,
    minNumber;

// maxNumber = a > b ? a > c ? a : c : b > c ? b : c;

if (a > b){
    if (a > c){
        maxNumber = a;
        if (b > c){
            midNumber = b;
            minNumber = c;
        }else{
            midNumber = c;
            minNumber = b;
        }
    }else{
        maxNumber = c;
        if (a > b){
            midNumber = a;
            minNumber = b;
        }else{
            midNumber = b;
            minNumber = a;
        }
    }
}else{
    if (b > c){
        maxNumber = b;
        if (a > c){
            midNumber = a;
            minNumber = c;
        }else{
            midNumber = c;
            minNumber = a;
        }
    }else{
        maxNumber = c;
        if (a > b){
            midNumber = a;
            minNumber = b;
        }else{
            midNumber = b;
            minNumber = a;
        }
    }
}
console.log(maxNumber + ' ' + midNumber + ' ' + ' ' + minNumber);
// 2. Multiplication Sign
// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//    Use a sequence of if operators.


    var a = -2,
    b = 4,
    c = 3;

if (a === 0 || b === 0 || c === 0){
    console.log(0);
}else if ((a < 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0) ||
    (a < 0 && b < 0 && c < 0)) {
    console.log('-');
}else {
    console.log('+');
}

// 3. The biggest of Three
// Write a script that finds the biggest of three numbers.
// Use nested if statements.

if (a < b){
    a = b;
    if (a < c){
        a = c;
    }
}
console.log('biggest: ' + a);
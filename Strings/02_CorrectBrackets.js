//Problem 2. Correct brackets
//
//Write a JavaScript function to check if in a given expression the brackets are put correctly.
//
//    Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).

var expr = ')(a+b))',
    expr2 = '5 + 2{ [3 + (2x – 1) + x] – 2}';

function goodBrackets(expr){
    var i = 0,
        x = expr[i],
        result = false;
    for (i = 1; i < expr.length; i++){
        if(x === ')' && expr[i] === '('){
            break;
        }else{
            result = true;
        }
    }
    return result;
}
console.log('Brackets are put correctly: ' + goodBrackets(expr) + ' > ' + expr);
console.log('Brackets are put correctly: ' + goodBrackets(expr2) + ' > ' + expr2);
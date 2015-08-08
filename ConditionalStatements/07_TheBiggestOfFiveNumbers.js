/*
Write a script that finds the greatest of given 5 variables.
    Use nested if statements.
*/
var a = -3,
    b = -0.5,
    c = 1.1,
    d = 2,
    e = -0.1;

if (a < b){
   a = b;
}if (a < c){
    a = c;
}if (a < d){
    a = d;
}if (a < e){
    a = e;
}

console.log('biggest: ' + a);
/*
Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
Calculates and prints its real roots.
*/

var a = 5,
    b = 2,
    c = 8,
    nominator1 = -b - Math.sqrt((b * b) - (4 * a * c)),
    nominator2 = -b + Math.sqrt((b * b) - (4 * a * c)),
    denominator = 2 * a,
    realRoot1 = nominator1 / denominator,
    realRoot2 = nominator2 / denominator;

console.log(realRoot1);
console.log(realRoot2);
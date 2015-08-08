/* Problem 1. Numbers
 Write a script that prints all the numbers from 1 to N.
 */
var i,
    N = 30;

for (i = 1; i <= N; i++){
    console.log(i);
}
console.log('\n');

/* Problem 2. Numbers not divisible
 Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
*/
for (i = 1; i <= N; i++){
    if (i % 3 && i % 7){
        console.log(i);
    }
}
console.log('\n');

//Problem 3. Min/Max of sequence
//
//Write a script that finds the max and min number from a sequence of numbers.

var sequence = [1, 78, 0.56, 33,-50, 9, 0, 21,-9.8, 1.5, 3, 5, 3, 99, 2, -25, -1, -51, 345, -.3, 300 ],
    min = Infinity,
    max = -Infinity;

for (i = 0; i < sequence.length; i++){
    if (min > sequence[i]){
        min = sequence[i];
    }
    if (max < sequence[i]){
        max = sequence[i];
    }
}
console.log('min: ' + min);
console.log('max: ' + max + '\n');

//Problem 4. Lexicographically smallest
//
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

// Paste in Browser console:
var prop,
    minString = 'ZZZZZZZ',
    maxString = '';
for (prop in document){
    if (minString > prop){
        minString = prop;
    }
    if (maxString < prop){
        maxString = prop;
    }
}
console.log('smallest: ' + minString + '\n largest: ' + maxString);

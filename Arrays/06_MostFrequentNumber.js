/*Problem 6. Most frequent number

 Write a script that finds the most frequent number in an array.
*/
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    counter = 0,
    maxCount = 0,
    winner,
    i,
    j;

for (i = 0; i < arr.length; i++){
    for (j = 0; j < arr.length; j++){
        if (arr[i] === arr[j]){
            counter += 1;
        }
        if (maxCount < counter){
            maxCount = counter;
            winner = arr[i];
        }
    }
    counter = 0;
}
console.log(winner + '(' + maxCount + ' times)');
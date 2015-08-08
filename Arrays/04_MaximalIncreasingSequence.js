// Write a script that finds the maximal increasing sequence in an array.

var arr = [3, 2, 3, 4, 2, 2, 4, 9, 10, 11, 12, -1, -2, 2, 5, 6, 7],
    counter = 0,
    maxCount = 0,
    startNumber,
    endNumber,
    result = [],
    i;

    for (i = 1; i < arr.length; i++){
        if (arr[i - 1] + 1 === arr[i]){
            counter += 1;
        }else{
            counter = 0;
        }
        if (maxCount < counter){
            maxCount = counter;
            endNumber = arr[i];
        }
    }
    startNumber = endNumber - maxCount;
for (i = 0; i <= maxCount; i++){
    result[i] = startNumber + i;
}
console.log(result.join(', '));
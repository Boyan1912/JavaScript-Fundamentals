//Write a script that finds the maximal sequence of equal elements in an array.

var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 5, 5, 5, 5, 5, 9, 3, -5, 4],
    result = [],
    counter = 1,
    maxCount = 0,
    winnerNumber,
    i;

for (i = 1; i < arr.length; i++){
    if (arr[i - 1] === arr[i]){
        counter += 1;
    }else{
        counter = 1;
    }
    if (maxCount < counter){
        maxCount = counter;
        winnerNumber = arr[i];
    }
}
for (i = 0; i < maxCount; i++){
    result[i] = winnerNumber;
}
console.log(result.join(', '));
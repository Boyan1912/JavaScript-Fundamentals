//Problem 6. Larger than neighbours
//
//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).

function largerThanNeighbours(index, arr){
    return !!arr[index - 1] && !!arr[index + 1] ? arr[index] > arr[index - 1] && arr[index] > arr[index + 1] ? true :
        false : 'number has less than two neighbours';

    // simpler: return arr[index] > arr[index + 1] && arr[index] > arr[index - 1];
}
console.log('Larger Than Neighbours: ' + largerThanNeighbours(0, [2,1,3,-4,5,9,7,5,454,77,2,-2,7,2,100]));


//Problem 7. First larger than neighbours
//
//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
//    Use the function from the previous exercise.

function firstLargerThanNeighbours(arr){
    var i;
    for (i = 0; i < arr.length; i++){
        if (largerThanNeighbours(i, arr) === true){
            return i;
        }
    }
    return -1;
}
console.log('First Larger Than Neighbours: ' + firstLargerThanNeighbours([2,1,3,-4,5,9,7,5,454,77,2,-2,7,2,100]));
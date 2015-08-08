/*
Problem 7. Binary search

Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
*/
var list = [96,	51,	98,	85,	32, 0, -9, 100, 13, -63, 84, 38, 17, -15, 4, 14, 13, 65, 58, 40, 48],
    smallest = Infinity,
    sorted = [],
    i,
    j;
for (i = 0; i < list.length; i++){
    for (j = 0; j < list.length; j++){
        if (smallest > list[j]){
            smallest = list[j];
        }
    }
    sorted.push(smallest);
    list[list.indexOf(smallest)] = Infinity;
    smallest = Infinity;
}
console.log(sorted.join(', '));


    function binarySearch(arr, searched){
            var left = 0,
                right = arr.length,
                middle;
            while(right - left > 0){
                    middle = parseInt(left + ((right - left) / 2));
                    if (searched === arr[middle]){
                        return middle;
                    }else if (searched > arr[middle]){
                        left = middle;
                    }else if(searched < arr[middle]){
                        right = middle;
                    }
                if (middle === left && (middle === right || middle === right - 1) && searched !== arr[middle]){

                    break;
                }
            }
        return 'Searched item is not in the array';
    }

    console.log(binarySearch(sorted, -9));

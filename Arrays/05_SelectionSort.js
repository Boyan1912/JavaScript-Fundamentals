/*Problem 5. Selection sort

 Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.

 Hint: Use a second array*/

var list = [96,	51,	98,	85,	32, 0, -9, 100, 13, -63, 84, 38, 17, -15, 4, 14, 13, 65, 58, 40, 48],
    smallest = Infinity,
    result = [],
    i,
    j;

for (i = 0; i < list.length; i++){

    for (j = 0; j < list.length; j++){
        if (smallest > list[j]){
            smallest = list[j];
        }

    }
    result.push(smallest);
    list[list.indexOf(smallest)] = Infinity;
    smallest = Infinity;
}

console.log(result.join(', '));
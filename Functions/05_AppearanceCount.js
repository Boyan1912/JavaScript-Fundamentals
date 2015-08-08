//Problem 5. Appearance count
//
//Write a function that counts how many times given number appears in given array.
//    Write a test function to check if the function is working correctly.

function countAppearances(number, arr){
    arr = arr || [];
    var count = 0,
        i;
    for (i = 0; i < arr.length; i +=1){
        if (arr[i] === number){
            count += 1;
        }
    }
    return count;
}
function testCountAppearances(){
    var number = (Math.random() * 100) | 0,
        rndArr = [],
        i,
        rndNumber;

        for (i = 0; i <= 1000; i++){
          rndNumber = (Math.random() * 100) | 0;
          rndArr[i] = rndNumber;
        }
    console.log('Number: ' + number);
    console.log('Array: ' + rndArr.join('  '));
    console.log('Appearance count: ' + countAppearances(number, rndArr));
}
testCountAppearances();

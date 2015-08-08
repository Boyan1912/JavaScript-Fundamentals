//Problem 2. Remove elements
//
//Write a function that removes all elements with a given value.
//    Attach it to the array type.
//    Read about prototype and how to attach methods.

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];

Array.prototype.remove = function(value){
    for (var i = 0; i < this.length; i++){
        if (value === this[i]){
            this.splice(i, 1);
        }
    }
    return this;
}
Array.prototype.removeSecondWay = function(value){
    return this.filter(function(index){
            return this[index] !== value;
        }
    )
}
console.log(arr.join(', '));
console.log(arr.remove(1).join(', '));
console.log(arr.removeSecondWay(1).join(', '));
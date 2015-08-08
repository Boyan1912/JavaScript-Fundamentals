//Problem 3. Deep copy
//
//Write a function that makes a deep copy of an object.
//    The function should work for both primitive and reference types.

function deepCopyObj(obj){
    var i,
        copyObj = {};

    for (i in obj){
        if (typeof obj[i] !== 'object'){
            copyObj[i] = obj[i];
        }else{
            copyObj[i] = deepCopyObj(obj[i]);
        }
    }
    return copyObj;
}
// TESTS:
    var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    car: {type:"Fiat", model:500, color:"white", tyres: {brand: ["Michelin", "Good year"]}},
    collection: [2, 5, -10, true, 'backpack',[4, -4], 5 * 5, false],
    introduce: function hello(){console.log('Hi that\'s me ' + this.firstName);}
};

var personCopy = deepCopyObj(person);
console.log(personCopy);
console.log('----------------------------------------------------');
person.firstName = 'Pesho';
console.log(personCopy.introduce());
console.log(person.introduce());
console.log('----------------------------------------------------');
person.car.type = "Seat!!!!";
person.car.tyres.brand[0] = false;
console.log('----------------------------------------------------');
console.log(personCopy.car.tyres.brand);
person.collection[0] = 1000;
person.introduce = function hello(){console.log('Not the same guy! - ' + this.firstName);};
console.log('----------------------------------------------------');
console.log(personCopy);
console.log(personCopy.introduce());
console.log('----------------------------------------------------');
//Problem 4. Has property
//
//Write a function that checks if a given object contains a given property.

var obj = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    car: {type:"Fiat", model:500, color:"white", tyres: {brand: ["Michelin", "Good year"]}},
    collection: [2, 5, -10, true, 'backpack',[4, -4], 5 * 5, false],
    introduce: function hello(){console.log('Hi that\'s me ' + this.firstName);}
},
    hasProp = hasProperty(obj, 'length');

    function hasProperty(obj, prop){
    return !!obj[prop];
}

console.log('has length: ' + hasProp);
hasProp = hasProperty(obj, 'lastName');
console.log('has last name: ' + hasProp);

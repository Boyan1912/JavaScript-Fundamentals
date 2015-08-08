function makePerson(firstName, lastName, age, isFemale){
    var temp = [],
        i;
    for(i = 0; i < arguments.length - 1; i+=1){
        temp.push(arguments[i]);
    }
    if (temp.some(function(arg){ return !arg })){
        return 'Invalid parameters for a person!'
    }
    console.log(temp.join(', '));
    return {
        firstName: firstName + '',
        lastName: lastName + '',
        age: + age,
        gender: (isFemale === true || isFemale === false) ? isFemale ? 'female' : 'male' : 'unknown'
    };
}

console.log(makePerson());
//Problem 6.
//
//Write a function that groups an array of people by age, first or last name.
//    The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
//Use function overloading (i.e. just one function)

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Ivanov', age: 42},
    { firstname : 'Sasho', lastname: 'Hristov', age: 20},
    { firstname : 'Ico', lastname: 'Stoyanov', age: 17},
    { firstname : 'Boyu', lastname: 'Mihailov', age: 44},
    { firstname : 'Gruyu', lastname: 'Dimitrov', age: 51},
    { firstname : 'Stoyu', lastname: 'Nikolov', age: 21}];

function group(people, parameter){
    parameter = parameter + '';
    var result = {};

    switch (parameter){
        case 'firstname': {
            result = deepCopyObj(people.sort(function(a, b){
                return a.firstname > b.firstname;
            }));
        } break;

        case 'lastname': {
            result = deepCopyObj(people.sort(function(a, b){
                    return a.lastname > b.lastname;
                }));

            } break;
        case 'age': {
            result = deepCopyObj(people.sort(function(a, b){
                return a.age - b.age;
            }));
        } break;
        default : result = {
            byFirstName: group(people, 'firstname'),
            byLastName: group(people, 'lastname'),
            byAge: group(people, 'age')
        }; break;
    }
    return result;
}

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
console.log(group(people, 'firstname'));
console.log('---------------------------------------------');
console.log(group(people, 'lastname'));
console.log('---------------------------------------------');
console.log(group(people, 'age'));
console.log('---------------------------------------------');
console.log(group(people));
console.log('---------------------------------------------');
console.log(people[0]);


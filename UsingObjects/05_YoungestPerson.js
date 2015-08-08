//Problem 5. Youngest person
//
//Write a function that finds the youngest person in a given array of people and prints his/hers full name
//Each person has properties firstname, lastname and age.

var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Ivanov', age: 42},
    { firstname : 'Sasho', lastname: 'Hristov', age: 20},
    { firstname : 'Ico', lastname: 'Stoyanov', age: 17},
    { firstname : 'Boyu', lastname: 'Mihailov', age: 44},
    { firstname : 'Gruyu', lastname: 'Dimitrov', age: 51},
    { firstname : 'Stoyu', lastname: 'Nikolov', age: 21}];

function findYoungestPerson(people){
    var i,
        youngestAge = Infinity,
        youngestMan;
    for (i = 0; i < people.length; i++){
        if (youngestAge > people[i].age){
            youngestAge = people[i].age;
            youngestMan = people[i];
        }
    }
    console.log('Youngest person is ' + youngestMan.firstname + ' ' + youngestMan.lastname + ', ' + youngestMan.age + ' years of age');
}
findYoungestPerson(people);
//Problem 1. Make person
//
//Write a function for creating persons.
//    Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

function makePerson(firstName, lastName, age, isFemale){
    var temp = [],
        i;
    for(i = 0; i < arguments.length - 1; i+=1){
        temp.push(arguments[i]);
    }
    if (arguments.length < 4 || temp.some(function(arg){ return !arg })){
        return 'Invalid parameters for a person!'
    }

    return {
        firstName: firstName + '',
        lastName: lastName + '',
        age: + age,
        gender: (isFemale === true || isFemale === false) ? isFemale ? 'female' : 'male' : 'unknown'
    };
}
function randomPeopleGenerator() {
    var rndAge,
        rndNames = ['Dwayne', 'Jennings', 'Michelle', 'Walters', 'Peggy', 'Waters', 'Stewart', 'Bradford', 'Cummings', 'Laura', 'Kelly',
            'Maryann', 'Rivera', 'Grace', 'Walton'],
        rndIndex,
        rndName,
        rndSex,
        rndName2,
        rndIndex2;

        rndIndex = Math.random() * rndNames.length | 0;
        rndSex = !!(rndIndex % 2),
        rndName = rndNames[rndIndex],
        rndAge = Math.random() * 100 | 0;
        rndIndex2 = rndIndex - 1 >= 0 ? rndIndex - 1 : rndIndex;
        rndName2 = rndNames[rndIndex2];
        return makePerson(rndName, rndName2, rndAge, rndSex);
}

function peopleArrayGen(count){
    var i,
        people = [];
    for (i = 0; i < count; i +=1){
        people.push(randomPeopleGenerator());
    }
    return people;
}
console.log(peopleArrayGen(10));

function endTask(task){
    console.log('\n\n' + '----------------------------- Problem ' + (task + 1) + ' ----------------------------');
}
endTask(1);


//Problem 2. People of age
//
//Write a function that checks if an array of persons contains only people of age (with age 18 or greater)
//Use only array methods and no regular loops (for, while)
var peopleProblem2 = [],
    resultProblem2,
    showAge;

for (i = 0; i < 10; i +=1){
    peopleProblem2.push(randomPeopleGenerator());
}

    resultProblem2 = peopleProblem2.every(function(person){
    return person.age >= 18;
});
    peopleProblem2.forEach(function(person){
    console.log(person.firstName + ' - ' + 'age: ' + person.age);
});
console.log('The array of persons contains only people of age (with age 18 or greater): ' + resultProblem2);
endTask(2);


//Problem 3. Underage people
//
//Write a function that prints all underaged persons of an array of persons
//Use Array#filter and Array#forEach
//Use only array methods and no regular loops (for, while)

var peopleProblem3 = peopleArrayGen(15),
    resultProblem3 = peopleProblem3.filter(function(person){
        return person.age <= 18;
    });

    resultProblem3.length < 1 ? console.log('No underaged people in the array') :
    resultProblem3.forEach(function(person, index){
        console.log('Underaged persons:\n# ' + (index + 1) + ' ' + person.firstName + ' - age: ' + person.age + ' sex: ' + person.gender);
    });

endTask(3);

//Problem 4. Average age of females
//
//Write a function that calculates the average age of all females, extracted from an array of persons
//Use Array#filter
//Use only array methods and no regular loops (for, while)

var peopleProblem4 = peopleArrayGen(20);

function averageAgeFemales(people){
    var females = people.filter(function(person){
            return person.gender === 'female';
        }),
        sum = 0,
        average;

    females.forEach(function(woman){
        sum += woman.age;
    });
    average = sum / females.length;
    console.log('Total women in the array: ' +  females.length);
    console.log(females);
    console.log('Average age of females in the array: ' + average.toFixed(4));
}

averageAgeFemales(peopleProblem4);
endTask(4);


//Problem 5. Youngest person
//
//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)
//Use Array#find

function findYoungestMale(people){
    var sortedMales = people.filter(function(person){
        return person.gender === 'male';
    }).sort(function(person1, person2){
        return person1.age - person2.age;
    });
    console.log('There are ' + sortedMales.length + ' male persons in the array:');
    sortedMales.forEach(function(person){
    console.log(person.firstName + ' - age: ' + person.age + ', gender: ' + person.gender);
    });
    return sortedMales[0];
}

var peopleProblem5 = peopleArrayGen(10),
    youngestMale = findYoungestMale(peopleProblem5);
console.log('The youngest male is: ' + youngestMale.firstName + ' ' + youngestMale.lastName + ', Age: ' + youngestMale.age);
endTask(5);


//Problem 6. Group people
//
//Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//Use Array#reduce
//Use only array methods and no regular loops (for, while)

var peopleProblem6 = peopleArrayGen(15);

function groupPeople(people){
    var result = people.reduce(function(obj, person, index){
        obj[person.firstName[0]] ? obj[person.firstName[0]].push(person) : obj[person.firstName[0]] = [person];
        return obj;
    }, {});
    return result;
}  // usually works fine, sometime throws a mistake, don't know why!
console.log('People grouped by first letter of first name:');
console.log(groupPeople(peopleProblem6));



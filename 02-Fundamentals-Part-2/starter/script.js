'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

// Functions

function logger() {
    console.log('My name is Jonas');
}
// Calling /running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(2, 4);
// console.log(fruitProcessor(2, 4));
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function Declarations Vs Expressions
function calAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
} // Function declaration

const age1 = calAge1(1991);
// console.log(age1);

const calAge2 = function (birthYear) {
    return 2037 - 1991;
} //Function expression

const age2 = calAge2(1991);
console.log(age1, age2);

// Arrow Functions
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// Reviewing Functions
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const yearsUntilRetirements = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirements = 65 - age;
//     if (retirements > 0) {
//         console.log(`${firstName} retires in ${retirements} years`);
//         return retirements;
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirements(1991, 'Jonas'));
// console.log(yearsUntilRetirements(1950, 'Mike'));

// Introduction to Arrays
// const friends = ['Mark', 'Jonas', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

//Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(years);
const age11 = calcAge(years[0]);
const age12 = calcAge(years[years.length - 1]);
console.log(age11, age12);

// Basic Array Operations(Methods)
const friends = ['Mark', 'Jonas', 'Peter'];
const newLength = friends.push('John'); // Push Method, adds element to the end of array
console.log(friends);
console.log(newLength);

friends.unshift('Frances'); // Adds element at the beginning of an array.
console.log(friends);

friends.pop(); //removes last element of an array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // removes first element of an array.
console.log(friends);

console.log(friends.indexOf('Jonas')); // checks for the index of an array value.

friends.push(23);
console.log(friends.includes('Jonas')); // checks if a value of the array is available in the array.
console.log(friends.includes(23));

// Introduction to Objects 
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friendss: ['Mercy', 'Kamzy', 'Emma']
// }
// console.log(jonas);

// const newObj = new Object({ lastName: 'Akila', }
// )
// console.log(newObj);

// // Dot Vs Bracket Notation
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const namekey = 'Name';
// console.log(jonas['first' + namekey]);
// console.log(jonas['last' + namekey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, agee, job, and friends');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong Request');
// }

// jonas.location = 'Nigeria';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);

// Challenge
// Jonas has 3 friends, and his best friend is called Mercy
// console.log(`${jonas.firstName}  has ${jonas.friendss.length} friends, and his best friend is called ${jonas.friendss[0]}`);
// console.log(jonas.firstName + ' has ' + jonas.friendss.length + ' ' + 'friends and his best friend is called' + " " + jonas.friendss[0]);

// Objects Methods.
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 1991,
    job: 'Teacher',
    friendss: ['Mercy', 'Kamzy', 'Emma'],
    hasDriversLicense: true,

    calccAge: function () {
        console.log(this);
        return 2037 - this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calccAge()}-year old ${this.job}, he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence.`
    }
    // calccAge: function (birthYearr) {
    //     return 2037 - birthYearr;
    // }
}
    ;
console.log(jonas.calccAge());
// console.log(jonas['calccAge'](1991));

// Challenge
// Jonas is a 46 year old teacher, and he has a drivers licence.
console.log(jonas.getSummary());

// Iteration: The for Loops

// for loop keeps running when coditon is TRUE
for (let rep = 1; rep < 10; rep++){
    console.log(`lifting weights repetition ${rep}`);
}























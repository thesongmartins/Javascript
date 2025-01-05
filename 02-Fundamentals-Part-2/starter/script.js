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



















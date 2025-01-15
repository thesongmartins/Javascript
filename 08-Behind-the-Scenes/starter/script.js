'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, You're ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Steven';
//       const str = `Oh and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//     }
//     // console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Hoisting and TDZ Practice

// Hoisting with Variables
console.log(me);
// console.log(Job);
// console.log(year);

var me = 'Jonas';
let Job = 'Teacher';
const year = 1991;

// Hoisting with functions
console.log(addDecl(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);

// this Keyword
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);

// Regualar functions Vs Function Expressions

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    const self = this; // self or that
    const isMillenial = function () {
      //   console.log(this.year >= 1981 && this.year <= 1996);

      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// Object reference (shallow and deep copies)
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}
const marriedJessica = marryPerson(jessica, 'Davies');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davies';
console.log(`Before: `, jessica);
console.log(`After: `, marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica2 };
jessicaCopy.lastName = 'Davies';
jessicaCopy.family.push('Mary', 'John');
console.log(jessica2, jessicaCopy);

// Deep Copy
const jessicaClone = structuredClone(jessica2);
jessicaClone.family.push('Mary', 'John');

console.log('Original: ', jessica2);
console.log('Clone: ', jessicaClone);

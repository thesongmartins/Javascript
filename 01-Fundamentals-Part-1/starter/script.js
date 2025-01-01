let js = 'amazing';
// if (js === 'amazing') { alert("Javascript is Fun") };
// console.log(js);
// console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
// console.log(23);

// Values And Variables
// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions
// let jonas_matilda = 'JM';
// let $function = 27;

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';
// console.log(myFirstJob);

// Data Types
/**
 * 7 Primitive Data Types
 * Number: Floating point numbers, used for decimals and integers.
 * String: Sequence of characters, used for text.
 * Boolean: Logical type that can only be true or false, used for making decisions.
 * Undefined: Value taken by a variable that is not yet defined ('empty value').    
 * Null: Also means 'empty value'.
 * Symbol (ES2015): Value that is unique and cannot be changed.
 * BigInt (ES2020): Larger integers than the Number type can hold.
 * 
 * JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
 * 
    * JavaScript uses the concept of dynamic typing.
    * Values have data types, not variables.
    * Variables do not have types.
    * We do not need to manually define the data type of the value stored in a variable.
    * JavaScript automatically figures out the data type of the value that a variable holds.
    * The same variable can hold different types of values.
    * We can change the value of a variable, and JavaScript will automatically determine the new data type.
    * This is why JavaScript is called a dynamically typed language.
    * This is in contrast to statically typed languages like Java, C++, or Rust, where the data type of a variable is explicitly defined.
    * In those languages, a variable can only hold values of that particular data type.
    * In JavaScript, a variable can hold any type of value.
    * This is why JavaScript is called a loosely typed language.
    * 
 */

// Boolean
true; // Boolean
console.log(true); // Boolean
let javascriptIsFun = true; // Boolean
console.log(javascriptIsFun); // true

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
// console.log(typeof 23); // number
// console.log(typeof 'Jonas'); // string
javascriptIsFun = 'YES!'; // String
console.log(typeof javascriptIsFun); // string

// Undefined
let year;
console.log(year); // undefined
console.log(typeof year); // undefined
year = 1991; // Number
console.log(typeof year); // number

console.log(typeof null); // object

// let, const and var
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990; // Uncaught TypeError: Assignment to constant variable.
// const job; // Uncaught SyntaxError: Missing initializer in const declaration. 
var job = 'programmer;'
job = 'teacher';

// lastName = 'schmedtmann'; // Not recommended
// console.log(lastName); // schmedtmann

// Basic Operators
// An operator allows us to transform or combine values. For example, the + operator adds two numbers together.  
// Arithmetic Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah); // 46 19
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 92 4.6 8: 2 * 2 * 2  

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName); // Jonas Schmedtmann

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x); // 99

// Comparison Operators
// we use comparison operators to compare values. For example, the > operator checks if the left value is greater than the right one.
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); // true

// Operator Precedence
// Operator precedence determines the order in which operators are executed. For example, multiplication is executed before addition. 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018); // true
let z, y;
z = y = 25 - 10 - 5; // z = y = 10, z = 10, y = 10
console.log(z, y); // 10 10
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); // 46 19 32.5



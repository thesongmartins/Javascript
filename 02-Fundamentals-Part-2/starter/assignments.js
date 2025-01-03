'use strict';

/**
 1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

 2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
*/

function describeCountry(country, population, capitalCity) {
    const countries = `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
    return countries;
}
const consoleOut = describeCountry('Finland', 6, 'Helsinki');
console.log(consoleOut);
const nigeria = describeCountry("Nigeria", 200, 'Abuja');
const usa = describeCountry("United States", 334.9, 'Washington, D.C')
const russia = describeCountry("Russia", 143.8, 'Moscow');

console.log(nigeria);
console.log(usa);
console.log(russia);

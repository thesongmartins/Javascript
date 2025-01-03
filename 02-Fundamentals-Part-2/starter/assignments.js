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

// Functions Declarations and Expressions
/*
1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).


 */
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);

console.log(percPortugal1, percChina1, percUSA1);

// Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);

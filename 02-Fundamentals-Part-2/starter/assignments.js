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
/*
 1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
*/
const percentageOfWorld3 = population => (population / 7900) * 100;
const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUSA3 = percentageOfWorld3(332);

console.log(percPortugal3, percChina3, percUSA3);

// Functions calling other functions
/*
 1. Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

 2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

 3. Call describePopulation with data for 3 countries of your choice.
*/

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage} % of the world.`;
}
console.log(describePopulation('China', 1441));

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//     console.log(description);
// };

// describePopulation('Portugal', 10);
// describePopulation('China', 1441);
// describePopulation('USA', 332);

// Introduction to Arrays
/*
    1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

    2. Log to the console whether the array has 4 elements or not (true or false).

    3. Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
 */

const populations = [200, 300, 400, 500];
console.log(populations);
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(200),
    percentageOfWorld1(300),
    percentageOfWorld1(400),
    percentageOfWorld1(500)
];
console.log(percentages);

// Basic Array operations
/*
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */


// Introduction to Objects


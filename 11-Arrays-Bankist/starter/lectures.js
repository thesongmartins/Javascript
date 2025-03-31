// The magic of chaining methods
const eurToUsd = 1.1;
// PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
// reduce method
// const balance = movements.reduce((acc, mov) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + mov;
// }, 0);
// console.log(balance);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   return acc > mov ? acc : mov;
// }, movements[0]);

// Challenge 1
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   // console.log(dogsJuliaCorrected);
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   // console.log(dogs);
//   dogs.forEach((dog, i) => {
//     const type = dog >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${i + 1} is an ${type}, and is ${dog} years old.`);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Challenge 2
// const calAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

//   const adults = humanAges.filter(age => age => 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   return average;
// };
// calAverageHumanAge([3, 5, 2, 12, 7]);

const calAverageHumanAge = ages => {
  const humanAges = ages
    .map(age => (age < 2 ? 2 * age : 16 + age * 4))
    .filter(age => age => 18)
    .reduce((acc, age) => acc + age / Array.length, 0);
};
calAverageHumanAge([3, 5, 2, 12, 7]);
// // Data transformation methods: Map, Filter, Reduce
// // The Map Method
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// // console.log(movementsUSD);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// // The Filter Method
// const deposits = movements.filter(mov => mov > 0);

// const withdrawals = movements.filter(mov => mov < 0);

// The find method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal); // -400

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); // {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}

// The findIndex method

// The Findlast method and FindlastIndex method
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal); // -130

// `Your latest large movement was ${lastWithdrawal} movements ago`;

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) >= 1000
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

// Some and Every
const anyDeposits = movements.some(mov => mov > 0); // true
console.log(anyDeposits);

const allDeposits = movements.every(mov => mov > 0); // false

// Flat and FlatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrFlat = arr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
const arrDeepFlat = arrDeep.flat(2); // [1, 2, 3, 4, 5, 6, 7, 8]

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FlatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

//   Sorting Arrays
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']

console.log(movements.sort((a, b) => {})); // [-400, -130, 2500, 3000, 5000]

// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// arr.slice(2); // ['c', 'd', 'e']
// console.log(arr.slice(-2));

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2); // ['b', 'c']
// console.log(arr);

// // REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);

// // JOIN
// console.log(letters.join(' - '));

// // New array method
// const arrr = [23, 11, 64];
// console.log(arrr[0]);
// console.log(arrr.at(0));

// // Getting last array element
// console.log(arrr[arrr.length - 1]);
// console.log(arrr.splice(-1)[0]);
// console.log(arrr.at(-1));

// console.log('Jonas'.at(0));

// // Looping arrays: forEach
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('--- FOREACH ---');
// movements.forEach((movement, index, array) => {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// // forEach with Maps and Sets
// // Map
// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });
// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach((value, _, map) => {
//   console.log(`${value}: ${value}`);
// });

// Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1. Calculate the recommended food portion for each dog

dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log if it's eating too much or too little
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recommendedFood ? 'much' : 'little'
  }`
);

// 3. Create an array of owners whose dogs eat too much
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

// 4. Create an array of owners whose dogs eat too little
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 5. Log a string for each owner saying "Matilda's dog is eating too much!"
ownersEatTooMuch.forEach(owner => {
  console.log(`${owner}'s dog is eating too much!`);
});

// 6. Check if any dog is eating exactly the amount of food they should
const eatingExactAmount = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(eatingExactAmount); // false

// 7. Check if any dog is eating an okay amount of food (based on recommended amount)
const eatingOkayAmount = dogs.some(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(eatingOkayAmount); // true
// 8. Create an array of dogs that are eating an okay amount of food
const dogsEatingOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsEatingOkay);
// 9. Create a shallow copy of the dogs array and sort it by recommended food portion in ascending order
const dogsCopy = dogs.slice();
// dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);

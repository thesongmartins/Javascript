'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced  objects literals, before es6 openingHours: openingHours
  openingHours: openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 Enhanced feature
  orderDelivery({ starterIndex, mainIndex, time, adddress }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adddress} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} `
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '23:30',
  adddress: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours: $openingHours, categories } = restaurant;

// console.log($name, openingHours, categories);

// Changing Varible names for objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values on objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Destructuring Arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, l, [j, k]] = nested;
console.log(i, l, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Spread Operators [Spreading Arrays]
const $arr = [7, 8, 9];
const badNewArr = [1, 2, $arr[0], $arr[1], $arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...$arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Creating copies of array
const mainMenuCopy = [...restaurant.mainMenu];

// Challenge
// Join 2 arrays
const $menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log($menu); // Successfully Solved

// Iterables: arrays, strings, maps, sets. NOT Objects

const str = 'Jonas';
const letters = [...str];
console.log(letters);
console.log(`${letters.join(' ')}`);

// Real world Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRes = { foundedIn: 1998, ...restaurant, founder: 'Guisappe' };
console.log(newRes);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// first use case is Destructuring
// Rest Patterns and Parameters
const [$a, $b, ...$others] = [1, 2, 4, 5];
console.log(a, b, $others);
const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

// Rest in objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// Second use case is Functions
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const $x = [23, 5, 7];
add(...$x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('Mushrooms');

// Short Circuiting (&& and ||)
// The can use any data type, return any data type.
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------- AND ---------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

// Nullish Coalescing Operator ??
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Logical Assignment Operators
const rest1 = {
  $$$$name: 'capri',
  numGuests: 20,
};
const rest2 = {
  $$$$name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

// Nullish assignment operator
rest1.numGuests = rest1.numGuests ??= 10;
rest2.numGuests = rest2.numGuests ??= 10;

// And assignment operator
rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1, rest2);

// Looping arrays: for of loop - ES6
const $menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of $menuu) console.log(item);
for (const [i, el] of $menuu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// Enhanced Object Literals
//  Optional Chaining ?
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "We're closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Optional Chaining on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Chaining on Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User Array empty');

// Looping Objects:Objects keys, values and entries

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We're open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
  console.log(day);
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// Key, Value
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// New Operations to make sets useful
const italianFoods = new Set([
  'Pasta',
  'Gnocchi',
  'Tomatoes',
  'Olive oil',
  'Garlic',
  'Basil',
]);

const mexicanFoods = new Set([
  'Tortilla',
  'Beans',
  'Rice',
  'Tomatoes',
  'Avocado',
  'Garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log(...commonFoods);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);

console.log(...new Set([...italianFoods, ...mexicanFoods]));

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

const uniqueItalianMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Clasico Italiano');
rest.set(1, 'firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest.get('name'));

rest
  .set('Categories,'[('Italian', 'Pizzeria', 'Vegetarian', 'Organic')])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :')
  .set(false, 'We are closed');
console.log(rest.get('name'));

const time = 8;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

console.log(rest.has('Categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
const arrr = [1, 2];
rest.set(arrr, 'Test');
console.log(rest);

// Maps: Iteration
const question = new Map([
  ['question', 'What is th best programming language in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [false, 'Try again'],
]);
console.log(question);

// Convert Objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
console.log(...question);

// Summary: Which DS to use
// Challenge
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const gameArr = [...new Set(gameEvents.values())];
console.log(gameArr);
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} mins`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half}Half] ${min}: ${event}`);
}

// Working with strings: Part 1
const airline = 'Tap Air Portugal';
const plane = 'A320';
console.log(plane[0]);

console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = seat => {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky!!');
  }
};
checkMiddleSeat('3E');
checkMiddleSeat('23C');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));

// Working with strings: Part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in Name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replacing parts of strings
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'Gate'));
// console.log(announcement.replaceAll('door', 'Gate'));

// Regular Expressions
console.log(announcement.replace(/door/g, 'Gate'));

// Booleans Methods
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('Air'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the NEW Airbus Family');
}

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I hava a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Working with strings: Part 3
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = name => {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding a string
const message = 'Go to gate 23';
console.log(message.padStart(22, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(23, '+'));

const maskCreditCard = number => {
  const str = number + '';
  const last = str.slice(14);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(276647839821764327));
console.log(maskCreditCard(4785629999999932875672));

// Repeat
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = n => {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
// Challenge
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);

  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// String method practice
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(type, from, to, time);
  const output = `${type.startsWith('_Delayed' ? '🔴' : '')}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}

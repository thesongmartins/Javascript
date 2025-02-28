'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adddress }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adddress} at ${time}`
    );
  },

  openingHours: {
    thu: {
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
  },
};

restaurant.orderDelivery({
  time: '23:30',
  adddress: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

// Changing Varible names for objects
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values on objects
const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

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

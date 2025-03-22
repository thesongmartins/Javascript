'use strict';

// Default Parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = numPassengers
) {
  const booking = {
    // ES5
    // numPassenger = numPassenger || 1;
    // price = price || 199;
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
  console.log(bookings);
};
createBooking('LH23');

// How passing arguments works: Values Vs Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 385495830243,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 385495830243) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 1000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// First class functions Vs Higher order functions
// Functions Accepting callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Origninal string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Js uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// greet('Hello')('Jonas');

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// greet('Hello')('Jonas');

// The call and apply method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// Call Method
book.call(eurowings, 236, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 234, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply Method
const flightData = [577, 'George Cooper'];
// NOT use in modern JS
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//   Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// const tax = (rate) => {
//   return value => value + value * rate;
// };
// console.log(tax(0.23, 1000));
const addTaxRate = rate => {
  return value => value + value * rate;
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Immediately invoked functions
const runOnce = function () {
  console.log(`This will never run again`);
};
runOnce();

// IIFE
(function () {
  console.log(`This will never run again`);
})();

() => console.log(`This will also never run again`)();

// Closures

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// More closures

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(() => {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

// Challenge
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'Yellow';
  });
})();

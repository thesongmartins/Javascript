'use strict';

// Constructor Functions & new operator
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1999);
console.log(jonas);

// 1. New Empty is created
// 2. function is called, this = {}
// 3. {} is linked to a prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// Prototypal inheritance & the prototype chain
console.log(jonas.__proto__);
// Object.prototype (Top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

// Prototypal Inheritance on Built-In Objects
const arr = [3, 6, 6, 4, 5, 6, 9, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// Challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Benz', 95);

bmw.accelerate();
bmw.brake();

// ES6 Classes
// Class Expression
// const PersonCl = class {};

// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   Methods will be added to the .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not s full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //   Static Method
  // Array.from is attached to the constructor
  // parseFloat
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davies', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

PersonCl.hey();

// 1. Classes are NOT hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in strict mode

// Setters & Getters
const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Challenge
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed = this.speed - 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    return (this.speed = speed * 1.6);
  }
}
const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.brake();
ford.speedUs = 50;
console.log(ford);

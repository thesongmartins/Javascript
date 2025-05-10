'use strict';
const Person = function (firstName, birthYear) {};

new Person('Jonas', 1999);

// 1. New Empty is created
// 2. function is called, this = {}
// 3. {} is linked to a prototype
// 4. function automatically returns {}

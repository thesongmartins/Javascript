'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, You're ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

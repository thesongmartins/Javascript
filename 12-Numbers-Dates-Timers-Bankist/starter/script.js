'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formattedMovementDate = (date, locale) => {
  // Display Dates
  const daysPast = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = daysPast(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    // return `${day}/${month}/${year}, ${hour}:${min}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movements: mov,
    movementDate: acc.movementsDates.at(i),
  }));
  console.log(combinedMovsDates);

  if (sort) combinedMovsDates.sort((a, b) => a.movements - b.movements);
  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;

  combinedMovsDates.forEach((obj, i) => {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate);
    const displayDate = formattedMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(mov, acc.locale, acc.currency);
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = acc => {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers

const startLogOutTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0s, stop timer and logout user
    if (time === 0) {
      clearInterval(time);
      labelWelcome.textContent = 'Login to get started!';
      containerApp.style.opacity = 0;
    }
    // Decrease 1s
    time--;
    // setTimeout();
  };
  // Set time to 5 minutes
  let time = 60;

  // Call timer everyy second
  tick();
  const timer = setInterval(tick, 1000);
};
let currentAccount;

// Fake always logged In
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toDateString());
    receiverAcc.movementsDates.push(new Date().toDateString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    time = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toDateString());
      // receiverAcc.movementsDates.push(new Date());

      // Update UI
      updateUI(currentAccount);
    }, 2500);

    // Reset timer
    clearInterval(timer);
    time = startLogOutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// Sorting
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Converting and checking numbers

// console.log(23 === 23.0);
// Base 10 0-9
// Binary base 2 0 1

// console.log(Number('23'));
// console.log(+'23');
// Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseFloat('2.5rem'));

// If value is not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(23 / 0));

// Checking if a value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// Math and Rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));

// The remainder operator
// console.log(5 % 2); // 1
// console.log(8 % 3); // 2
// console.log(6 % 2); // 0
// console.log(7 % 2); // 1
// console.log(8 % 2); // 0
// console.log(9 % 2); // 1
// console.log(10 % 2); // 0
// console.log(11 % 2); // 1

// const isEven = n => n % 2 === 0;
// console.log(isEven(8)); // true
// console.log(isEven(23)); // false
// console.log(isEven(10)); // true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });
// [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//   if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   if (i % 3 === 0) row.style.backgroundColor = 'blue';
// });

// Numeric Separators
// const diameter = 287_460_000_000;
// console.log(diameter); // 287460000000

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.14_15_92;

// Working with BigInt
// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(2 ** 53 + 1); // 9007199254740992
// console.log(2 ** 53 + 2); // 9007199254740993
// console.log(2 ** 53 + 3); // 9007199254740994
// console.log(2 ** 53 + 4); // 9007199254740995

// console.log(BigInt(2 ** 53) + BigInt(4)); // 9007199254740995n

// Creating Dates
// const now = new Date();
// console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString);
console.log(future.getTime());

console.log(new Date(2142253385000));
console.log(Date.now());

future.setFullYear(2040);

// Operations with dates
console.log(+future);

const daysPast = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const days1 = daysPast(new Date(2037, 10, 3, 14), new Date(2037, 3, 24));
console.log(days1);

// Internationalization of dates
const noww = new Date();
const options = {
  hours: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
const locale = navigator.language;
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(noww);

// Internationalization of numbers
const num = 283894937.23;

const optionss = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  useGrouping: false,
};
console.log(new Intl.NumberFormat('en-NG').format(num));
console.log(new Intl.NumberFormat('ar-SY').format(num));
console.log(navigator.language, new Intl.NumberFormat('ar-SY').format(num));

// Timers: setTimeOut & setInterval

// setTimeut

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(() => {
  const today = new Date();
  console.log(today);
}, 1000);

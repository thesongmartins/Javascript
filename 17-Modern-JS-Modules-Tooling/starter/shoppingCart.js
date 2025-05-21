// Exporting and Importing in ES6 Modules
console.log('Exporting Module');

// Blocking code
// console.log('Starting fetching users...');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finished fetching users');

const shoppingCost = 10;
const cart = [];

export const addToCart = function (prooduct, quantity) {
  cart.push({ prooduct, quantity });
  console.log(`${quantity} ${prooduct} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

// export default function (prooduct, quantity) {
//   cart.push({ prooduct, quantity });
//   console.log(`${quantity} ${prooduct} added to cart`);
// }

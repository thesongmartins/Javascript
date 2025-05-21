// Importing Modules
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';
// console.log('Importing Module');

// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

// import add from './shoppingCart.js';
// add('pizza', 2);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(post => console.log(post));

const lastPost2 = await getLastPost();
console.log(lastPost2);

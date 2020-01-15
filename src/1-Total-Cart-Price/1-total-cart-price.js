/*
 * Total Cart Price
 *
 * Write a point-free function to calculate a shopping cart’s total price in dollars.
 *
 * Calculate a shopping cart’s total price in dollars.
 *
 * Usage: const price = getTotalPrice(cart); //=> '$44.20'
 */

const { pluck, pipe, sum } = require('ramda');
const cart = require('./cart.js');

const toEUR = pipe(
  (num) => num.toFixed(2)
  , (str) => `€${str}`
);

const getTotalPrice = pipe(
  pluck('price')
  , sum
  , toEUR
);

const result = getTotalPrice(cart);

console.log({ result });

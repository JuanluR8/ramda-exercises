/*
 * Cheapest Price
 *
 * Write a point-free function to return a cart's cheapest item.
 *
 * Given a cart, return the cheapest item’s name.
 *
 * Usage: const cheapestItem = getCheapestItem(cart); //=> 'apple'
 */

const { head, pipe, prop, sortBy } = require('ramda');
const cart = require('../models/2.json');

const getCheapestItem = pipe(
  sortBy(prop('price'))
  , head
  , prop('name')
);

const result = getCheapestItem(cart);

console.log({ result });

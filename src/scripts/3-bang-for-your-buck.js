/*
 * Bang for Your Buck
 *
 * Write a point-free function to get the 3 top-rated meals <= a given price.
 *
 * Given a maximum price and menu, return the 3 top-rated meals for that price or less.
 *
 * Usage: const best3Meals = getTop3MealsFor(12, menu); => [
    {
      name: 'Lamb Gyro',
      price: 11.86,
      rating: 4.9
    }, {
      name: 'House Salad',
      price: 9.00,
      rating: 4.65
    }, {
      name: 'Gigantus Fries',
      price: 11.86,
      rating: 4.5
    }
  ]
 */

const { descend, filter, pipe, prop, sort, take } = require('ramda');
const menu = require('../models/3.json');

const getTop3MealsFor = pipe(
  (maxPrice, menu) => filter(({ price }) => price <= maxPrice)(menu)
  , sort(descend(prop('rating')))
  , take(3)
);

const result = getTop3MealsFor(20, menu);

console.log({ result });

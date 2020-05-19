/*
 * Get the Flavors
 *
 * Using lenses, write a point-free solution to get everyone's favorite ice cream.
 *
 * You’re a great person, so you decide to surprise the office with ice cream!
 * Everyone’s favorite flavor is saved in your company’s database. Use lenses to get them! Your solution must be point-free.
 *
 * If the score’s at or above 800, return “{score} is excellent!”
 * If the score’s at or above 700, return “{score} is good”
 * If the score’s at or above 650, return “{score} is fair”
 * If the score’s at or below 649, return “{score} is poor”
 *
 */

const { map, view, lensPath } = require('ramda');
const employees = require('../models/6.json');

const getTheFlavors = map(
  view(
    lensPath([
      'interests'
      , 'foods'
      , 'sweets'
      , 'iceCream'
      , 'favoriteFlavor'
    ])
  )
);
const result = getTheFlavors(employees);

console.log({ result });

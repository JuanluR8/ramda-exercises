/*
 * Fix the Flavors
 *
 * Using lenses, write a point-free solution to manipulate and return everyone's favorite ice cream.
 *
 * Using lenses, write a point-free solution that
 * 
 * 1. Capitalizes all the flavors
 * 2. Appends “IS A GREAT FLAVOR” to each one
 * 3. Returns them
 */

const { map, view, lensPath, pipe, toUpper } = require('ramda');
const employees = require('./employees.json');

const formatFlavor = (flavor) => `${flavor} is a great flavor`;
const emphasizeFlavor = pipe(
  view(
    lensPath([
      'interests'
      , 'foods'
      , 'sweets'
      , 'iceCream'
      , 'favoriteFlavor'
    ])
  )
  , formatFlavor
  , toUpper
);

const emphasizeFlavors = map(emphasizeFlavor);

const result = emphasizeFlavors(employees);

console.log({ result });

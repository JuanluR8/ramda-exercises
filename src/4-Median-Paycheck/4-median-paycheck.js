/*
 * Median Paycheck
 *
 * Write a point-free function to find the median monthly paycheck above $100,000.
 *
 * Given a list of employee salaries, find the median monthly paycheck above $100,000.
 *
 * Usage: const medianPaycheck = getMedianPaycheck(employees) // $141,000
 */

const { filter, pluck, lte, median, pipe, flip, divide } = require('ramda');
const employees = require('./employees');

const formatOutput = (salary) => salary.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

const paymentsNumber = 12;

const getMedianPaycheck = pipe(
  pluck('salary')
  , filter(lte(100000))
  , median
  , flip(divide)(paymentsNumber)
  , formatOutput
);

const result = getMedianPaycheck(employees);

console.log({ result });

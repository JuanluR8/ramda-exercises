/*
 * Rating Credit Scores
 *
 * Write a point-free function that reviews credit scores.
 *
 * Given a list of credit scores, return a list of reviews.
 *
 * If the score’s at or above 800, return “{score} is excellent!”
 * If the score’s at or above 700, return “{score} is good”
 * If the score’s at or above 650, return “{score} is fair”
 * If the score’s at or below 649, return “{score} is poor”
 *
 * Usage: 
 * const ratings = [740, 550, 681, 805];
 * 
 * getCreditScoreRatings(ratings);
 * // ['740 is good', '550 is poor', ' 681 is fair', '805 is excellent!']
 */

const { cond, T, map, lte } = require('ramda');
const scores = require('./scores.json');

const rateScore = (rating) => (score) => `"${score}" is ${rating}`;

const reviewCreditScores = map(
  cond([
    [lte(800), rateScore('excellet!')]
    , [lte(800), rateScore('good')]
    , [lte(800), rateScore('fair')]
    , [T, rateScore('poor')]
  ])
);

const result = reviewCreditScores(scores);

console.log(result);

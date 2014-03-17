/**
 * Created by acastruc on 3/15/14.
 *
 * Euler Problem 206
 * https://projecteuler.net/problem=206
 *
 * Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,
 * where each “_” is a single digit.
 *
 */
define([
    'jquery',
    'bigint'
], function ($, bigInt) {
    'use strict';

    /**
     * The object representing the solution to Euler problem 206
     * @constructor
     */
    function EulerSolution206() {
    }

    /**
     * Return true if the given number has the form 1_2_3_4_5_6_7_8_900 where '_' is any single digit, and
     * false otherwise.
     *
     * @param n value to test to see if it matches the pattern
     * @returns {boolean} true if the given value matches the pattern, false otherwise
     */
    EulerSolution206.prototype.isThisTheSquareWeAreLookingFor = function (n) {
        return /^1\d2\d3\d4\d5\d6\d7\d8\d900$/.test(n);
    };


    /**
     * Finds the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0
     * *
     * @param logger an object with the following fields
     * {
     *    log: function that takes a string parameter to log general info
     *    problem: function that takes a string parameter to log a description of the problem
     *    answer: a function that takes a string parameter that is the solution
     * }
     * @returns {number} the time in milliseconds it took to compute
     */
    EulerSolution206.prototype.solve = function (logger) {

        logger.problem("Euler problem 206 - what unique positive integer squared has the form 1_2_3_4_5_6_7_8_9_0?");

        var answer = 0;
        var begin = performance.now();

        //Looking for positive integer N where N squared has the form 1_2_3_4_5_6_7_8_9_0
        //N^2 ends in zero. By the properties of squared numbers this means N ends in 0*
        //If N ends in 0 then N^2 must end with '900'. Again by properties of squared numbers N must end in 30 or 70*
        //We'll use this to filter out which values we test against
        //
        //*see http://en.wikipedia.org/wiki/Square_number#Properties
        //We know the search range is
        // [sqrt(1020304050607080900), sqrt(192939495969798990)]
        // but we also know N is going to end with 30 or 70 so start our search at the lowest value ending in 30
        var searchMin = 1010101030;//Math.floor(Math.sqrt(1020304050607080900)), bumped up to end in '30'
        var searchMax = 1389026624;//floor(sqrt(1929394959697989990)+1);

        searchMin = 1375009130; //for debugging only, remove this line It starts search close to the solution

        //Remember the answer is going to have to end in '30' or '70'
        //We start the search with a value that ends with '30'.
        //Do two checks, i and i+40. Then increment by 100 to test the next two values ending in 30/70 etc etc
        logger.log('Calculating from ' + searchMin + '...');
        for (var i=searchMin; i<searchMax; i+=100) {
            if(i%1000030===0){
                console.log(i + ', ' + (i+40));
            }
            //Test i as is, since it purposely ends in 30
            var testVal = bigInt(i);
            if (this.isThisTheSquareWeAreLookingFor(testVal.multiply(testVal))) {
                answer = i;
                break;
            }

            //Test the number that ends with 70, aka i+40
            testVal = bigInt(i+40);
            if (this.isThisTheSquareWeAreLookingFor(testVal.multiply(testVal))) {
                    answer = i+40;
                    break;
            }
            //Increment by 100 to check the next 2 values ending in '30'/'70'
        }

        var end = performance.now();
        var duration = (end-begin);
        logger.log("...done");
        logger.answer(answer, duration);

        //return the time in ms
        return (end-begin);
    };

    return EulerSolution206;
});
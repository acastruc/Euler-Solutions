/**
 * Created by acastruc on 3/16/14.
 *
 * Euler Problem 1
 * https://projecteuler.net/problem=1
 *
 *  Finds the sum of all the multiples of 3 or 5 below 1000
 */
define([
    'jquery'
], function ($) {
    'use strict';

    /**
     * The object representing the solution to Euler problem #1
     * @constructor
     */
    function EulerSolution1 () {
    }


    /**
     * Finds the sum of all the multiples of 3 or 5 below 1000
     * @param logger an object with the following fields
     * {
     *    log: function that takes a string parameter to log general info
     *    problem: function that takes a string parameter to log a description of the problem
     *    answer: a function that takes a string parameter that is the solution
     * }
     * @returns {number} the time in milliseconds it took to compute
     */
     EulerSolution1.prototype.solve = function (logger) {

        logger.problem("Euler problem 1 - Find the sum of all the multiples of 3 or 5 below 1000");
        logger.log('Calculating...');

        var start = performance.now();

        var answer = 0;
        var maximum = 1000;
        var i;
        for(i=3; i < maximum; i +=1) {
            if(i%3===0 || i%5===0) {
                answer += i;
            }
        }
        var end = performance.now();
        var duration = (end-start);

        logger.answer(answer, duration);

        //return the time in ms
        return duration;
     };

    return EulerSolution1;
});






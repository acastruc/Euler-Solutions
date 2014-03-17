/**
 * Created by acastruc on 3/16/14.
 *
 * Euler Problem 55
 * https://projecteuler.net/problem=55
 *
 * Finds how many Lychrel numbers there are below 10000
 *
 */
define([
    'jquery'
], function ($) {
    'use strict';

    /**
     * The object representing the solution to Euler problem #55
     * @constructor
     */
    function EulerSolution55() {
    };


    /**
     * Returns true if the given string is a palindrome and false otherwise.
     * @param n value to test whether it's a palindrome
     * @returns {boolean}
     */
    EulerSolution55.prototype.isPalindrome = function (n) {
        var strVal = n.toString();
        if(strVal.length === 0) {
            return false;
        }
        for(var i=0; i<strVal.length; i++) {
            if (strVal[i] !== strVal[strVal.length-1-i]) {
                return false;
            }
        }
        return true;
    };


    /**
     * Return the reverse of the given string
     * @param {string} to reverse
     * @returns {string}
     */
    EulerSolution55.prototype.reverseString = function (s) {
        return s.split("").reverse().join("");
    };

    /**
     * Return a number that is the reverse of the given positive number
     * @param {number} the value to have reversed
     * @returns {number} or NaN
     */
    EulerSolution55.prototype.reverseNumber = function (n) {
        if (n < 0) {
            return NaN;
        }
        return parseInt(this.reverseString(n.toString()));
    };


    /**
     * REturns whether a given number is a Lychrel number
     * @param n {number} the number to test
     * @returns {boolean}
     */
    EulerSolution55.prototype.isLychrel = function (n) {
        //50 iteration or less to prove it's not a Lychrel, otherwise assume it is
        var currentVal = n;
        for(var i=0; i<50; i++) {
            currentVal = currentVal + this.reverseNumber(currentVal);
            if(this.isPalindrome(currentVal)) {
                return false;
            }
        }
        return true;
    };

    /**
    * Finds how many Lychrel numbers there are below 10000
    * @param logger an object with the following fields
    * {
    *    log: function that takes a string parameter to log general info
    *    problem: function that takes a string parameter to log a description of the problem
    *    answer: a function that takes a string parameter that is the solution
    * }
    * @returns {number} the time in milliseconds it took to compute
    */
    EulerSolution55.prototype.solve = function (logger) {

        logger.problem("Euler problem 55 - How many Lychrel numbers are there below ten-thousand? ");

        var answer = 0;
        var begin = performance.now();

        var start = 1;
        var maximum = 10000;
        logger.log('Looking for Lychrel numbers between ' + start + ' and ' + maximum + '...');
        for (var i=start; i<=maximum; i+=1) {
            if (this.isLychrel(i)) {
                answer += 1;
            }
        }

        var end = performance.now();
        var duration = (end-begin);
        logger.answer(answer, duration);

        //return the time in ms
        return duration;
    };

    return EulerSolution55;
});
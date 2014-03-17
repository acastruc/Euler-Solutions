/**
 * Adobe Programming Test
 * Main entry point script
 *
 * Adam Castrucci
 */
require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery-1.11.0-min',
        bigint: 'libs/BigInteger.min'
    },

    shim: {
        'bigint': {
            exports: 'bigInt'
        }
    }
});

require([
    'jquery',
    'EulerSolution1',
    'EulerSolution55',
    'EulerSolution206'
], function ($, EulerSolution1, EulerSolution55, EulerSolution206) {

    /**
     * The object to handle a solution's output
     * @type {{target: string, log: log, problem: problem, answer: answer}}
     */
    var logger = {
        /**
         * The selector for the root DOM element under which to log/set problem description and set the solution
         */
        target: '',

        /**
         * API to log info when a solution is being executed
         * @param s {string} general info to display during the execution of the solution.
         */
        log: function (s) {
            var selector = this.target + ' .log';
            $(selector).html($(selector).html() + "<p>" + s + "</p>");
        },

        /**
         * API to log the problem description
         * @param s {string} describing the problem that is being solved
         */
        problem: function (s) {
            var selector = this.target + ' .problem';
            $(selector).html("<h2>" + s + "</h2>");
        },

        /**
         * API to log the solution's answer
         * @param s string representing the solution's answer
         */
        answer: function (s, time) {
            var selector = this.target + ' .answer';
            $(selector).html("<p>ANSWER=" + s + " ("+ time + "ms)</p>");
        }
    };

    //Solve 3 problems
    $(document).ready(function () {
        //
        //Question 1 - Euler #1
        //
        var solution1 = new EulerSolution1();
        logger.target = '#euler1';
        solution1.solve(logger);

        //
        //Question 2 - Euler #55
        //
        var solution55 = new EulerSolution55();
        logger.target = '#euler55';
        solution55.solve(logger);

        //
        //Question 2 - Euler #206s
        //
        var solution206 = new EulerSolution206();
        logger.target = '#euler206';
        solution206.solve(logger);
    });
});


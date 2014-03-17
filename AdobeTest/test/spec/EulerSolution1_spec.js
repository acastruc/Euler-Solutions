/**
 * Unit test for the EulerSolution1 class
 *
 * Created by acastruc on 3/16/14.
 */
define(['js/EulerSolution1'], function(EulerSolution1) {
    'use strict';

    describe("EulerSolution1", function () {

        describe("constructor", function () {
            it("should create an object", function () {
                var solution = new EulerSolution1();
                expect(solution).not.toBeNull();
                expect(solution instanceof EulerSolution1).toBeTruthy();
            });
            it("should have a solve() method", function () {
                var solution = new EulerSolution1();
                expect(solution.solve).toBeDefined();
            });
        });

        describe("solve()", function () {
            var soln;
            var fakeLogger
            beforeEach(function () {
                soln = new EulerSolution1();
                fakeLogger = {
                    log:        jasmine.createSpy('logSpy'),
                    problem:    jasmine.createSpy('problemSpy'),
                    answer:     jasmine.createSpy('answerSpy')
                };
            });
            it("should return the correct answer", function () {
                soln.solve(fakeLogger);

                expect(fakeLogger.answer.calls.count()).toEqual(1);
                expect(fakeLogger.answer.calls.mostRecent().args[0]).toEqual(233168);
            });

            it("should have described the problem", function () {
                soln.solve(fakeLogger);

                expect(fakeLogger.problem.calls.count()).toEqual(1);
                expect(fakeLogger.problem).toHaveBeenCalledWith("Euler problem 1 - Find the sum of all the multiples of 3 or 5 below 1000");
            });

            it("should return a time in ms >0 and less than 1 second", function () {
                var duration = soln.solve(fakeLogger);
                expect(duration).toBeGreaterThan(0);
                expect(duration).toBeLessThan(1000); //failure means something is taking waaay too long
            });
        });
    });
});



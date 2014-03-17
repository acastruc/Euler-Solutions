/**
 * Unit test for the EulerSolution206 class
 *
 * Created by acastruc on 3/16/14.
 */

define(['js/EulerSolution206'], function(EulerSolution206) {
    'use strict';

    describe("EulerSolution206", function () {

        describe("constructor", function () {
            it("should create an object", function () {
                var solution = new EulerSolution206();
                expect(solution).not.toBeNull();
                expect(solution instanceof EulerSolution206).toBeTruthy();
            });
            it("should have a solve() method", function () {
                var solution = new EulerSolution206();
                expect(solution.solve).toBeDefined();
            });
        });

        describe("isThisTheSquareWeAreLookingFor()", function () {
            var soln;
            beforeEach(function () {
                soln = new EulerSolution206();
            });

            it("should reject invalid objects", function () {
                expect(soln.isThisTheSquareWeAreLookingFor({})).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor([])).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor(null)).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor(undefined)).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('abc')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor(1.1)).toBeFalsy();
            });

            it("should reject strings that do not use digits to fit the pattern", function () {
                expect(soln.isThisTheSquareWeAreLookingFor('1A20304050607080900')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('1A203!40506%7080900')).toBeFalsy();
            })

            it("should accept strings that fit the pattern", function () {
                expect(soln.isThisTheSquareWeAreLookingFor('1020304050607080900')).toBeTruthy();
                expect(soln.isThisTheSquareWeAreLookingFor('1920304850607084900')).toBeTruthy();
            });

            it("should reject strings that are not the correct length", function () {
                expect(soln.isThisTheSquareWeAreLookingFor('10203040506')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('192939495969')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('11020304050607080900')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('10203040506070809001')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('102')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('192')).toBeFalsy();
                expect(soln.isThisTheSquareWeAreLookingFor('')).toBeFalsy();
            });
        });


        describe("solve()", function () {
            var soln;
            var fakeLogger
            beforeEach(function () {
                soln = new EulerSolution206();
                fakeLogger = {
                    log:        jasmine.createSpy('logSpy'),
                    problem:    jasmine.createSpy('problemSpy'),
                    answer:     jasmine.createSpy('answerSpy')
                };
            });
            it("should return the correct answer", function () {
                var duration = soln.solve(fakeLogger);

                expect(fakeLogger.answer.calls.count()).toEqual(1);
                expect(fakeLogger.answer.calls.mostRecent().args[0]).toEqual(1389019170);
                expect(duration).toBeGreaterThan(0);
            });
        });
    });
});


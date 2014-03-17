/**
 * Unit test for the EulerSolution55 class
 *
 * Created by acastruc on 3/16/14.
 */

define(['js/EulerSolution55'], function(EulerSolution55) {
    'use strict';

    describe("EulerSolution55", function () {

        describe("constructor", function () {
            it("should create an object", function () {
                var solution = new EulerSolution55();
                expect(solution).not.toBeNull();
                expect(solution instanceof EulerSolution55).toBeTruthy();
            });
            it("should have a solve() method", function () {
                var solution = new EulerSolution55();
                expect(solution.solve).toBeDefined();
            });
        });

        describe("isPalindrome()", function () {
            var soln;
            beforeEach(function () {
                soln = new EulerSolution55();
            });

            it("should return false for empty strings", function () {
                expect(soln.isPalindrome("")).toBeFalsy();
            });
            it("should return true for real string palindromes", function () {
                expect(soln.isPalindrome('12321')).toBeTruthy();
                expect(soln.isPalindrome('1')).toBeTruthy();
                expect(soln.isPalindrome('00')).toBeTruthy();
                expect(soln.isPalindrome('99799')).toBeTruthy();
                expect(soln.isPalindrome('111')).toBeTruthy();
                expect(soln.isPalindrome('1234567890987654321')).toBeTruthy();

                expect(soln.isPalindrome('abcba')).toBeTruthy();
                expect(soln.isPalindrome('QQaQQ')).toBeTruthy();
                expect(soln.isPalindrome('+h+')).toBeTruthy();
                expect(soln.isPalindrome('(-|-(')).toBeTruthy();
            });

            it("should return true for real number palindromes", function () {
                expect(soln.isPalindrome(12321)).toBeTruthy();
                expect(soln.isPalindrome(1)).toBeTruthy();
                expect(soln.isPalindrome(99799)).toBeTruthy();
                expect(soln.isPalindrome(0)).toBeTruthy();
                expect(soln.isPalindrome(111)).toBeTruthy();
                expect(soln.isPalindrome(12345654321)).toBeTruthy();
            });

            it("should return false for everything else", function () {
                expect(soln.isPalindrome(133)).toBeFalsy();
                expect(soln.isPalindrome(19)).toBeFalsy();
                expect(soln.isPalindrome(100)).toBeFalsy();
                expect(soln.isPalindrome(991799)).toBeFalsy();
                expect(soln.isPalindrome(1112)).toBeFalsy();

                expect(soln.isPalindrome('.133')).toBeFalsy();
                expect(soln.isPalindrome('.19')).toBeFalsy();
                expect(soln.isPalindrome('100')).toBeFalsy();
                expect(soln.isPalindrome('991799')).toBeFalsy();
                expect(soln.isPalindrome('1112')).toBeFalsy();

                expect(soln.isPalindrome('aabcba')).toBeFalsy();
                expect(soln.isPalindrome('.QQaQQ')).toBeFalsy();
                expect(soln.isPalindrome('>h<6')).toBeFalsy();
                expect(soln.isPalindrome('(-|-)')).toBeFalsy();
            });
        });

        describe("reverseString()", function () {
            var soln;
            beforeEach(function () {
                soln = new EulerSolution55();
            });
            it("should handle empty string", function () {
               expect(soln.reverseString('')).toEqual('');
            });
            it("should return the reverse of the given string", function () {
                expect(soln.reverseString('a')).toEqual('a');
                expect(soln.reverseString('abc')).toEqual('cba');
                expect(soln.reverseString('1232')).toEqual('2321');
                expect(soln.reverseString('<>')).toEqual('><');
                expect(soln.reverseString('0123')).toEqual('3210');
            });
        });

        describe("reverseNumber()", function () {
            var soln;
            beforeEach(function () {
                soln = new EulerSolution55();
            });
            it("should error on negative numbers or float", function () {
                expect(soln.reverseNumber(-2)).toEqual(NaN);
                expect(soln.reverseNumber(-20)).toEqual(NaN);
                expect(soln.reverseNumber(-20.98)).toEqual(NaN);
            });
            it("should handle positive single digit numbers", function () {
                for(var i=0; i<10; i+=1) {
                    expect(soln.reverseNumber(i)).toEqual(i);
                }
            });
            it("should return the reverse of the given number", function () {
                expect(soln.reverseNumber(123)).toEqual(321);
                expect(soln.reverseNumber(100)).toEqual(1);
                expect(soln.reverseNumber(1002)).toEqual(2001);
            });
            it("should error on negative numbers", function () {
                expect(soln.reverseNumber(-1)).toEqual(NaN);
                expect(soln.reverseNumber(-10)).toEqual(NaN);
            });
        });

        describe("isLychrel()", function () {
            var soln;
            beforeEach(function () {
                soln = new EulerSolution55();
            });

            it("should handle single digit numbers ", function () {
                for(var i=0; i<10; i+=1) {
                    expect(soln.isLychrel(i)).toBeFalsy();
                }
            });

            it("should identify known Lychrels", function () {
                expect(soln.isLychrel(196)).toBeTruthy();
                expect(soln.isLychrel(4994)).toBeTruthy();
            });

            it("should be limited to 50 iterations or less", function () {
                expect(soln.isLychrel(10677)).toBeTruthy(); //actually IS not a Lynchrel but
                                                            //this is only known after 53 iterations
            })
        });



        describe("solve()", function () {
            var soln;
            var fakeLogger
            beforeEach(function () {
                soln = new EulerSolution55();
                fakeLogger = {
                    log:        jasmine.createSpy('logSpy'),
                    problem:    jasmine.createSpy('problemSpy'),
                    answer:     jasmine.createSpy('answerSpy')
                };
            });
            it("should return the correct answer", function () {
                soln.solve(fakeLogger);

                expect(fakeLogger.answer.calls.count()).toEqual(1);
                expect(fakeLogger.answer.calls.mostRecent().args[0]).toEqual(249);
            });

            it("should return a time in ms >0 and less than 4 second", function () {
                var duration = soln.solve(fakeLogger);
                expect(duration).toBeGreaterThan(0);
                expect(duration).toBeLessThan(4000); //failure means something is taking waaay too long
            });
        });
    });
});


import { expect } from 'chai';
import Mocha from 'mocha';
import { bowling_game, isOdd, frames } from '../src/index';

describe("Canary test", () => {
    it("should return true", () => {
        expect(true).to.equal(true);
    })

    describe("Bowling Kata", () => {
        it("should calculate score of 1 on roll 1", () => {
            expect(bowling_game(1)).to.equal(1);
        });

        it("should calculate score of 2 for a roll of 2", () => {
            expect(bowling_game(2)).to.equal(2);
        });

        it("should calculate score of 2 rolls", () => {
            expect(bowling_game(1, 1)).to.equal(2);
        });

        it("should calculate score of second frame", () => {
            expect(bowling_game(2, 2, 2)).to.equal(6);
        });

        it("should calculate score of 4 rolls", () => {
            expect(bowling_game(2, 2, 2, 2)).to.equal(8);
        });

        it("should calculate spare", () => {
            expect(bowling_game(2, 8, 1)).to.equal(12);
        });

        it("should be able to calculate 2 spares in a row", () => {
            expect(bowling_game(2, 8, 1, 9, 5)).to.equal(31);
        });

        it("should be able to calculate a strike", () => {
            expect(bowling_game(10, 1, 2)).to.equal(16);
        });

        it("should be able to calculate strike on roll 3", () => {
            expect(bowling_game(1, 1, 10, 1, 2)).to.equal(18);
        });

        it("should be able to calculate score for 2 strikes in a row", () => {
            expect(bowling_game(10, 10, 1, 2)).to.equal(37);
        });

        it("should be able to bowl a 300", () => {
            expect(bowling_game(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)).to.equal(300);
        });

        xit("should be able to bowl all spares", () => {
            expect(bowling_game(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)).to.equal(150);
        });

    });

    describe("is odd", () => {
        it("should return true for 1", () => {
            expect(isOdd(1)).to.equal(true);
        });

        it("should return false for 2", () => {
            expect(isOdd(2)).to.equal(false);
        })
    });

    describe("frames", () => {
        it("should create frame from 2 non-strike rolls", () => {
            expect(frames(1, 2)).to.eql([
                [1, 2]
            ]);
        });

        it("should create 2 frames from 3 non-strike rolls", () => {
            expect(frames(1, 2, 3)).to.eql([
                [1, 2],
                [3]
            ]);
        });

        it("should create 2 frames from a strike and two non-strikes", () => {
            expect(frames(10, 1, 2)).to.eql([
                [10],
                [1, 2]
            ]);
        });

        it("should create 10 frames on 13 scores of 10", () => {
            expect(frames(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10).length).to.eql(10);
        });

        it("should return an array of three 10s on the bonus", () => {
            expect(frames(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10)[9]).to.eql([10, 10, 10]);
        });
    });

    describe("handle strikes", () => {
        it("should take strike on ")
    });
})
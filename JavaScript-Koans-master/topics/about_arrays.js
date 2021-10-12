// module("About Arrays (topics/about_arrays.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

test("array literal syntax and indexing", () => {
    const favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal("cellar door", favouriteThings[0], 'what is in the first position of the array?');
    equal(42, favouriteThings[1], 'what is in the second position of the array?');
    equal(true, favouriteThings[2], 'what is in the third position of the array?');
});

test("array type", () => {
    equal("object", typeof([]), 'what is the type of an array?');
});

test("length", () => {
    const collection = ['a','b','c'];
    equal(2, collection.length, 'what is the length of the collection array?');
});

test("splice", () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const workingWeek = daysOfWeek.splice(5, 0,'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');
    const weekend = daysOfWeek;

    deepEqual(workingWeek, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
    deepEqual(weekend, ['Saturday', 'Sunday'], 'what is the value of weekend?');
});

test("stack methods", () => {
    const stack = [];
    stack.push("first");
    stack.push("second");

    equal("first", stack.pop(), 'what will be the first value popped off the stack?');
    equal("second", stack.pop(), 'what will be the second value popped off the stack?');
});

test("queue methods", () => {
    const queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal("third", queue.shift(), 'what will be shifted out first?');
    equal("first", queue.shift(), 'what will be shifted out second?');
});
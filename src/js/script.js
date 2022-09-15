"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 7));
// console.log(calc(6, 10));
// console.log(calc(14, 17));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); 


const logger = function() {
    console.log('Hello world')
};

logger();



const calc = (a, b) => a + b;
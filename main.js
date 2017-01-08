"use strict";

var R = require('ramda');

var square = function square(x) {
    return x * x;
}
var squares = R.chain(square, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

document.getElementById('response').innerHTML = squares;

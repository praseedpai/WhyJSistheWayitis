function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

console.log(list1);



//
//
// Douglas Crockford Curry
//

Function.prototype.crockfordCurry = function () {
    "use strict";
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};


function add(x) {
    "use strict";
    return function (y) {
        return x + y;
    };
}
 
function multiply(x) {
    "use strict";
    return function (y) {
        return x * y;
    };
}
 
//Creating the curried functions
var adder = add.crockfordCurry();

var multiplier = multiply.crockfordCurry();

//Finding the sum of 1,2 & 3 with the curried function
console.log(adder(adder(1)(2))(3));

//Finding the product of 1,2 & 3 with the curried function
console.log(multiplier(multiplier(1)(2))(3));



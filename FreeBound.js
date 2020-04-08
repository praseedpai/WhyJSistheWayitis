// FreeBound.js
var X = 10;
var fn = function(Y) {
   // X is Free and Will be Captured as part of Closure
   // Y is Free
   return X + Y;
}
//---------------- Spit to the Console
console.log(fn(20))


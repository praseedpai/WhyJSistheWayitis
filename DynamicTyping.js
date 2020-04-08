///////////////////////////////////////////
// A Program to demonstrate Dynamic typing.
//
// In Javascript, variables do not have type
// But, values do have. 
//
// When values (contained in the variables)
// are combined using operators, type checking
// will be done. As a consequence, type checking can
// only be done at the run time. 
// 
//
//

var a = 2;
b = 2.3
console.log(a/b);
a = "Hello World..";
console.log(a/b);
a = new Date();
b = "ddd";
console.log(a/b);

a = 3.0;
b = 0;

console.log(a/b);
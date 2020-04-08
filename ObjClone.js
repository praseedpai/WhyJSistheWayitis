/////////////////////
//
// Define an Object
//
//

function Person(name, age, salary) {
  this.name = name;
  this.age  = age;
  this.salary = salary;
  this.SayHello = function() {
     console.log("Hello world...");
  }
  
}
//////////////////////
//
// Add a method to Person class
//
Person.prototype.SayHello2 = function(msg) {

   console.log("Hello world..." + msg);

}

Person.TempMeth = function() {
   console.log("Temp method...  ");
}

var temp = new Person("Praseed",42,1000);

temp.SayHello("Test");
temp.SayHello2( temp.name );
Person.TempMeth();

temp.toString = function() {
   console.log(this.name + "  " + this.age + "  " + this.salary);

}

temp.toString();

var temp1 = new Person("T",0,1000);



Person.prototype.toString = function(){
console.log("Class " + this.name + "  " + this.age + "  " + this.salary);
}

temp1.toString();

//////////////////////////////////
//
// Clone Temp1 object to create temp2
//

var newobj = {};
for( var n in temp1 )
{
   newobj [n] = temp1[n];
}

temp1.SayHello = function() {
  console.log("I did a dirty trick");

}

newobj ["SayHello"]();
temp1  ["SayHello"]();




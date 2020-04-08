function add_operation(a, b) {

    if (arguments.length < 1) 

    {

        return add_operation;

    } 

    else if (arguments.length < 2) 

    {

        return function(c) { return a + c };

    } 

    else {

        return a + b;

    }

}

////////////

//

// This will return a new function..

//

var add_with_one_arg = add_operation(10);

//////////////////////////////////

//

// This will trigger invocation

//

var d = add_with_one_arg(20);

//----- spit the result...

console.log(d);
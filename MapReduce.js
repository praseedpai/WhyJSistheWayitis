(define (sqr x ) ( * x x ))


(define (mymap fn lst )
   (cond ((null? lst ) '())
   (else (cons (fn (car lst))
   (mymap fn (cdr lst ))))))

(define (myreduce fn lst init )
  (cond ((null? lst ) init )
        (else (fn (car lst ) 
         (myreduce fn (cdr lst ) init )))))

(myreduce + (mymap sqr '( 1 2 3 4)) 0)
(myreduce * (mymap sqr '( 1 2 3 4 )) 1)
(map (lambda ( x ) (* x x )) '( 1 2 3 ))

****/

////////////////////////////
//
// A JavaScript port of the MapReduce
// written in Scheme
//

var sqr = function(x) {
  return x * x;
}

var add = function(sum , x ) {

   return sum + x ;
}


var mul = function( acc , x ) {
   return acc*x;
}

function Map( func , array ) {
   
   var ret_arr = [];
   array.forEach(function ( elem ) {
         ret_arr.push(func(elem));
   }  );
   return ret_arr;
}

function Reduce( adder , array , sum )
{
   var a = sum;

   array.forEach( function( elem ) {
      a = adder(a,elem );
   });
   return a;
}


var lst = Reduce(add , Map( sqr , [ 1 , 2 , 4 ] ), 0 );
console.log(lst);

lst = Reduce( mul , Map(sqr,[1,2,4] ) , 1 );
console.log(lst);

====================================================


function add( a , b ) { return a + b; }

function mul( adds , a, b ) { return adds(a,b); }


var s = mul( add , 2, 3 );

console.log(s);

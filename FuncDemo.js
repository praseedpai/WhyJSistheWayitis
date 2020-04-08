//////////////////////////////////////////
//
// A Node.js program to demonstrate passing
// of functions as a parameter ( aka function
// as values )
//
// SIGNUM function
//
//
var BubbleSort = function (ars, comp,swap)
{
	var length = ars.length;
		for( var i=0; i < length; ++i )
			for(var j=0;j<length-1; ++j )
				if (comp(ars[j], ars[j+1]) > 0)
					swap(ars,j,j+1);
}
/////////////////////////////////////////
//
//
// A comparitor for doubles
//
//
var double_comp = function( a , b ) {
return (a > b) ? 1 : (a<b )? -1 : 0;
}
////////////////////////////////////
//
// A comparitor for string...
//
//
var string_comp = function( a , b ) {
if ( a == b )
	return 0;
else if ( a > b )
	return 1;
else
	return -1;
}
///////////////////////////////////////
//
// A Swapper
//
// Since JavaScript references are passed
// by value , we cannot have swap function
// as in C/C++ or C# using ref keyword..
//
var swapper = function( a , index , index1) {
		var temp = a[index];
		a[index] = a[index1];
		a[index1] = temp;
}
//////////////////////////////////////////
//
// Sort a array of doubles using double
// comparitor
//
//
var arr= [ 10,20,21,7,8 ];

BubbleSort(arr,double_comp ,swapper);

for( k = 0 ; k< arr.length ; ++ k )
console.log(arr[k]);
//////////////////////////////////////////
//
// Sort a array of strings using string
// comparitor
//
//
var arr2 = ["Praseed","Renjith",
"Jay","Shine", "Raymond",
"Ansal","SriPad"];


BubbleSort(arr2,string_comp ,swapper);

for( k = 0 ; k< arr2.length ; ++ k )
console.log(arr2[k]);
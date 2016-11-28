// string data type
// we want to hold onto it, so we store the string in a variable
// we don't need to write string, we just need to declare a variable
var myString = "something something something";
console.log( myString );


 // ******** NUMBER TYPE
var a = 1;
var b = 2;
var c = 3.5;
console.log(a + b / c);


var number = 1;
number = "something else";
// number = 4;
console.log(number);

// will use a string and conatonate almost to put them together
// > 3 + "hello"
// '3hello'
// > "route" +  6 + 6
// 'route66'
// > 6 + 6 + "route"
// '12route'
// > 

// javascript does floating point return

console.log( 2 * 4 - (12 + 20));


// ******** STRING TYPE
// variable type with string variable name(instance) that stores the text "that's a nice string"
// a primitive that's been wrapped in this object 'string'
var myString = "that's a nice string";
console.log( myString );
console.log( myString.toUpperCase() );
console.log( myString.length );


// ********* BOOLEAN 
// an be either true or false, we get returned true or false data types
// node in the terminal is like irb, can use to test functionality
2 === "2";
2 == "2";
// triple equality operator is effetive, it will find false wheras double says true
3 != 2;
(1+1 === 2) && (1+1 === 4); // false
(1+1 === 2) || (1+1 === 4); // true

// truthy and falsey case tests below
// ➜  day_1 node
// > (1+1 === 2) && (1+1 ==== 4)
// ... 
// ... 
// > (1+1 === 2) && (1+1 === 4)
// false
// > if(true) console.log("true")
// true
// undefined
// > if(false) console.log("true")
// undefined
// > if(null) console.log("null is null")
// undefined
// > if(undefined) console.log("false")
// undefined
// > if(0) console.log("true")
// undefined
// > if("0") console.log("true")
// true
// undefined
// > if("") console.log("true")
// undefined
// > 


// ********* NULL
// null is a variable but a nothing value. It's there, but it represents the concept of nothing
var f = null;
console.log(f);


// ********* UNDEFINED
// it doesn't have a value assigned, javascript says undefined as it doesn't know about it
var d;
console.log(d);



// NODE TESTS, returns the data type using typeof
// > 3 + "hello"
// '3hello'
// > "route" +  6 + 6
// 'route66'
// > 6 + 6 + "route"
// '12route'
// > 

// parseInt converts string to integer
// > parseInt("2");
// 2


// NaN means not a number, eg if you try to do an operation on somthing that doesn't match the data type
// parseInt("cat")
// will return NaN



// // CLOSURE *****************
// // functions as closures
// var greet = function(isHappy){
//   var text = "";
//   if(isHappy){
//     text = "Hello friend";
//   }else{
//     text = "bugger off";
//   }
//   var displayText = function(){
//     console.log(text);
//   }
//   displayText();
// }

// greet(true);
// // greet(false);

// // () calls the function



// // SHADOWING ****************

// var name = "Jay";
// // this is global so is seen outside the functions and everyone an see it

// var talk = function(){
//   var name = "Rick";
//   console.log("My name is " + name);
// }
// // without var name, if just name = it just says it's not recreating a new variable, it reassigns the variable to rick

// talk();
// console.log("but my global name is " + name);
// // variable shadowing. Defined name variable inside a function which is more specific






 // **************************************

 var globalVariable = 99; // global variable gets assigned

 // We are returning an object with some inner functions​
 // All the inner functions have access to the outer function's variables​
 var separateFunction = function() { // this function never gets called
   var separateA = 2;
 };
 var outerFunction = function() {
   var outerA = 1;
   var innerFunction = function() {
     console.log('outerA ', outerA); // see this as variable 1
     console.log('globalVariable', globalVariable) // sees this as 99
     // console.log('separateA ', separateA); // can't see this, it's a separate function not defined
   };

   innerFunction() // then hits inner funtion called here
 };

 outerFunction(); // hits outer first, then outer a gets defined






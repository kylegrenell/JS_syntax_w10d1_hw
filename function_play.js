// // *****************************
// function sum(){
//   var i = 0;
//   var total = 0;

//   for (i; i < arguments.length; i++){
//     total += arguments[i];
//   }
//   return total;
// }
// // taking in arguments of numbers
// console.log(sum(1,2,3,4));
// console.log(sum(7,7));



// // *****************************
// a variable holding the function
// var hello = function(){
//   console.log("Hello!");
// } 

// hello();


// // // *****************************
// var add = function(a, b){
//   return a + b;
// }

// console.log('the return value is ' + add(1,2));


// // function(){
// //   console.log("hello");
// // }




// // // *****************************
// function mood(name, mood){
//   console.log(name + " you are: " + mood);
// }

// mood("Alan", "chilled");



// // // *****************************
// function add(a, b){
//   return a + b;
// }

// console.log("the return value is: " + add(1,2,3));
// // the placeholders of a and b are defined in add(1,2)



// // // *****************************
// function hellohello(){
//   console.log("hey");
// } 

// hellohello();


// // // takes two numbers and returns greatest of the 2 numbers



function greaterNumber(a, b){
  if(a > b){
      return a;
    }else{
      return b;
    }
  }

console.log(Math.max(5, 10));


var greater = function(a,b){
  if(a > b){
    return a;
  }else{
    return b;
  }
}

console.log(greater(1,8));




// you can pass functions to functions 
var add = function(a, b){
  return a + b;
}

var divide = function(a, b){
  return a / b;
}

var wow = function(functionToInvoke){
  console.log(functionToInvoke(2,1));
}

wow(add);
wow(divide);






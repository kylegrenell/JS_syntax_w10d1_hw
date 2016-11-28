//Section 1

//what types are these? Write your answer in a comment beside it.

1;            // number
"cat";        // string
true;         // boolean
[];           // array 
{};           // object/hash 
1.1;          // number
undefined;    // undefined value 

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1;            // truthy
"cat";        // truthy
true;         // truthy
NaN;          // fasly
[];           // truthy  
{};           // truthy
undefined;    // falsy
"";           // falsy
0;            // fasly

// test to see if truthy/falsy
var truthyFalsy = function(value){
  if (value){
    return true;
  } else {
    return false; 
  }
}

console.log(truthyFalsy("cat"));

//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var num = 20;

//3.2 Assign a variable that is a string
var str = "string";

//3.3 Assign a variable that is a boolean
var boo = true;

//3.4 Assign a variable that is an object
var object = [type: "object", role: "be objective"];

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var greeting = false;

if(greeting === true){
  console.log("Hello");
}else{
    console.log("bye");
  }



//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var raccyDaccy = animals[0];

//5.2. Assign the last element to a variable
var josephGerbils = animals[3];

//5.3. Assign the length of an array to a variable
var lengthOfArray = animals.length;

//5.4. Add an item to the end of the array
animals.push("frog");

//5.5. Add an item to the start of the array
animals.unshift("donkey aka ass");

//5.6. Assign the index of hedgehog to a variable
var hedgeVar = animals[1];


//Section 6

//6.1 Create an array of 5 vegetables
var vegArray = ["carrot", "pumpkin", "squash", "turnip", "peas"];

//6.2 Loop over the array and write to the console using a "while"
var vegCount = 0;
while ( vegCount < 20 ){
  console.log( "repetitive vegetable list: " + vegArray );
  vegCount++;
}

//6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegArray.length; i++){
  console.log(vegArray[i]);
}

//6.4 Loop again using a "for in"
var vegCount = 0;
for(var vegCount in vegArray){
  console.log("your vegetables are " + vegArray);
}


//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];


//7.1 Calculate the total cash in accounts
var sum = 0;
for (var key in accounts){
  sum += accounts[key].amount;
}

console.log(sum);


//7.2 Find the amount of money in the account with the largest balance

var largestAmount = 0;
for( var key in accounts) {
  largestAmount += accounts[key].amount;
}

console.log(largestAmount);

//7.3 Find the name of the account with the smallest balance



//7.4 Calculate the average bank account value
var average = sum / 5;
console.log(average);

//7.5 Find the value of marcs bank account

for (var key in accounts) {
  if (accounts[key].name === "marc"){
    console.log(accounts[key].amount);
  }
}


//7.6 Find the holder of the largest bank account



//7.7 Calculate the total cash in business accounts



//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
var myPerson = {
  name: "Jerome",
  height: 175,
  favouriteFood: "Pizza",
  eat: function(){
    return this.favouriteFood;
  }
}

console.log(myPerson.eat());





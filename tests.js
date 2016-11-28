// var animals = ["raccoon","hedgehog","mouse","gerbil"];

// //5.1. Assign the first element to a variable
// var raccyDaccy = animals[0];

// //5.2. Assign the last element to a variable
// var josephGerbils = animals[3];

// //5.3. Assign the length of an array to a variable
// var lengthOfArray = animals.length;

// //5.4. Add an item to the end of the array
// animals.push("frog");

// //5.5. Add an item to the start of the array
// animals.unshift("donkey aka ass");

// //5.6. Assign the index of hedgehog to a variable
// var hedgeVar = animals[2];

// console.log(raccyDaccy);
// console.log(josephGerbils);
// console.log(lengthOfArray);
// console.log(hedgeVar);
// console.log(animals);



// // var vegArray = ["carrot", "pumpkin", "squash", "turnip", "peas"];

// // console.log(vegArray);

// // var vegCount = 0;
// // while ( vegCount < 20 ){
// //   console.log( "repetitive vegetable list: " + vegArray );
// //   vegCount++;
// // }

// // var vegCount = 0;
// // for(var vegCount in vegArray){
// //   console.log("your vegetables are" + " " + vegArray);
// // }

// // for (var i = 0; i < vegArray.length; i++){
// //   console.log(vegArray[i]);
// // }

// // var truthyFalsy = function(value){
// //   if (value){
// //     return true;
// //   }else{
// //     return false; 
// //   }
// // }
// // console.log(truthyFalsy("cat"));

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



var largestAccount = 0;
for (var key in accounts){
  if ((accounts[key].type === 'personal' && largestAccount < accounts[key].amount)){
    largestAccount = accounts[key].amount;
  }
}

console.log(largestAccount);

// var largest = 0;
// var largestBankAccount = "";
// for (var key in accounts){
//   if (largest < accounts[key].amount){
//     largest = accounts[key].amount;
//     largestBankAccount = accounts[key].name;
//   }
// }

// console.log(largestBankAccount);


// var largestAmount = 0;
// for( var key in accounts) {
//   largestAmount += accounts[key].amount;
// }

// console.log(largestAmount);


// for (var key in accounts) {
//   if (accounts[key].name === "marc"){
//     console.log(accounts[key].amount);
//   }
// }

// var largestAmount = 0;
// for (var key in accounts){
//   if (largestAmount < accounts[key].amount)
//   {
//     largestAmount = accounts[key].amount;
//   }
// }

// console.log(largestAmount);


// var sum = 0;
// for (var key in accounts){
//   sum += accounts[key].amount;
// }

// console.log(sum);



// var arr = accounts.keys(accounts).map(function ( key ) { 
//   return obj[key]; 
// });


// var myPerson = {
//   name: "Jerome",
//   height: 175,
//   favouriteFood: "Pizza",
//   eat: function(){
//     return this.favouriteFood;
//   }
// }

// console.log(myPerson.eat());




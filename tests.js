// var vegArray = ["carrot", "pumpkin", "squash", "turnip", "peas"];

// console.log(vegArray);

// var vegCount = 0;
// while ( vegCount < 20 ){
//   console.log( "repetitive vegetable list: " + vegArray );
//   vegCount++;
// }

// var vegCount = 0;
// for(var vegCount in vegArray){
//   console.log("your vegetables are" + " " + vegArray);
// }

// for (var i = 0; i < vegArray.length; i++){
//   console.log(vegArray[i]);
// }

var truthyFalsy = function(value){
  if (value){
    return true;
  }else{
    return false; 
  }
}
console.log(truthyFalsy("cat"));

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



var myPerson = {
  name: "Jerome",
  height: 175,
  favouriteFood: "Pizza",
  eat: function(){
    return this.favouriteFood;
  }
}

console.log(myPerson.eat());




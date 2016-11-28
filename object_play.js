var myPerson = {
  name: "Guybrush",
  age: 32,
  weapon: 'cutlass',
  address: {street: "Pirate Way", postcode: "EH1 4AL"}
}

// add an objet to the hash
myPerson.pet = "parrot";
// assign a new value to age
myPerson.age = 207;
// two ways to access the hash, concatonate or by index
console.log("street", myPerson["address"]["street"]);
console.log("postcode", myPerson.address.postcode);


//log output from the hash
console.log("myPerson: ", myPerson);
console.log("person name", myPerson["name"]);
// put the key in as a string when looking up - because key you're looking up, not the value!
console.log("person age: ", myPerson.age);
console.log(myPerson.weapon);


// var myPerson2 = {
//   name: "kyle",
//   age: 97,
//   weapon: 'a brick'
// }

// propertyName = "name";
// console.log("myPerson: ", myPerson2);
// console.log("person name", myPerson2[propertyName]);



var caesar = {
  city: "Rome"
};

var cleopatra = {
  city: "Cairo"
};

var cicero = {
  city: "Rome"
};

var historyLesson = [caesar, cleopatra, cicero];
console.log(historyLesson);




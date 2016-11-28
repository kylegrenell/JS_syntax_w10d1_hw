
// Create a function that takes in the first name and surname, and speaks eg "Howdy, I am Rick Henry"
function fullName(firstName, secondName){
  console.log("Howdy, I am " + firstName + " " + secondName);
}

fullName("Rick", "Henry");



// Create a multiply function, returning the result.
function multiply(a, b){
  return a * b;
}

console.log(multiply(27,27));


// Create a function that takes in an array and returns the first element.
var array = ["first", "second", "third"];

function firstItem(){
  return array;
}

console.log(array[0]);


// Create a function that takes in a list of names of any length, and prints them all to screen.
var print = function (names){
  for(var name of names){
    console.log(name);
  }
}

var names =  ["Jeff Jeffface", "hector"];
print(names);



// Create an array of animal names and a function that adds the animals to a farm array and prints the names to the console.
animals = ["mouse", "hamster"];
function addAnimalToFarm(animal, farm){
  farm.push(animal);
  console.log("animals in farm are: " + animals);
}

addAnimalToFarm("rat", animals);


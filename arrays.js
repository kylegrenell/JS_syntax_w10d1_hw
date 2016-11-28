var guitars = ["fender", "gibson", "gretsch"];
console.log("guitars: " + guitars);

// alling a constructor on an array
var drums = new Array();

drums.push("sonor");
drums.push("ludwig");
console.log("drums: " + drums); 

console.log(guitars[0]);
console.log(drums[1]);
drums[2] = "premier";
console.log(drums);


drums[10] = "boom";
console.log(drums);
console.log(drums[6]);
console.log(drums.length);


// index where want to start 0, and how many 1
drums.splice(0, 1);
console.log(drums);


// removes last element from array
drums.pop();
console.log(drums);


// removes from the front of the array
drums.shift();
console.log(drums);


// pushes onto end of array
drums.push("not a drum");
console.log(drums);


// adds on to the start of array
drums.unshift("not a drum");
console.log(drums);



// var numberArray = [1,2,3,4,5,6,7,8,9];
// console.log(numberArray.filter(1..5));

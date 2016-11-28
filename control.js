var counter = 0;
if(counter > 0){
  console.log("counter greater than 0");
}else if(counter < 0){
  console.log("counter  is less than 0")
}  else{
  console.log("counter is less than or equal to 0");
}


var myName = "Keith";

if(myName === "Keith"){
  console.log("Just ran a half marathon");
}


// switch statement 
var pet = "dog";
switch(pet){
  case "cat": 
  console.log("stop scratching the bloody lounge");
  break;
  case "dog":
  console.log("who let the dogs out");
  break;
  default:
  console.log("no pet, :(");
}

// turnery operator
// give it a condition, say two parts want to execute if true or false
var aa = 1 + 1 === 2 ? "cool cool your maths works" : "nah your maths is off";
// so if this part is true, then use turnery to say : otherwise
console.log(aa);


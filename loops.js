// give an initial value otherwise will be undefined
var x = 0;
while ( x < 10 ){
  console.log( "loop " + x );
  x++;
}


var obj = {
  student1: 3,
  student2: 12,
  student3: 30
};

// for our key in the object
for(var key in obj){
  console.log("obj." + key + " = " + obj[key]);
}




var pets = ["dog", "cat", "pika"];

for (var i = 0; i < pets.length; i++){
  console.log(pets[i]);
}

// almost like replacing the colon with of from java
for(var pet of pets){
  console.log(pet);
}











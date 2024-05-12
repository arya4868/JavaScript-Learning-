
// PRIMITIVE 7 Types :- String, boolean, Number, null, undefined, symbol, BigInt

// NON-PRIMITIVE :- Reference :- Array, Object, Function 

// Array
console.log("---------------ARRAY-----------------");

const heros = ["shaktiman", "nagraj", "souravArya"];
console.log(heros);

// objects
console.log("---------------OBJECTS-----------------");
let founder = {
    name : "sourav",
    roll : 12345,
}
console.log(founder);

// Function 
console.log("-------------FUNCTIONS-------------------");
const myFunction = function(){
    console.log("Hello, mr sourav Arya");
}
myFunction();

console.log("-------------MEMORY-------------------");
console.log("");

// Stack(Primitve), 

let name = "SouravArya";
let name1 = name;

name1 = "Raman";
console.log(name);
console.log(name1);
console.log(name);

//Heap(Non-Primitive)

let user1 = {
    name : "sourav",
    department : "development"
}
console.log(user1);

let user2 = user1;
user2.name = "raman";
console.log(user1);


console.log("");
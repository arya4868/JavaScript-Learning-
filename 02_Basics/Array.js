
const array = [1,2,3,4,5,6];

console.log(array[1]);

const myArray = new Array(1,2,3,4,5,6);

console.log(myArray);

myArray.unshift(8); // add the value in front
console.log(myArray);
myArray.shift() // remove the value from front 
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(4));

console.log("-------------------");


const newArray = myArray.join(); // it will convert the myArray into string 
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

console.log("-------------------");

console.log("A", myArray);
const myNA1 = myArray.slice(1,3) // here 3 will not include 
console.log(myNA1);
console.log(myArray);

const myNA2 = myArray.splice(1,3);
console.log(myNA2);
console.log("B", myArray);


console.log("-------------------");

const marvel_hero = ["thor", "ironman", "spiderman"];
console.log(marvel_hero);

const indian_hero = ["krishh", "hrithik", "sharukh"];

//marvel_hero.push(indian_hero);
console.log(marvel_hero);
//console.log(marvel_hero[3][1]);


const allHero = marvel_hero.concat(indian_hero);
console.log(allHero);

const newAllHero = [...marvel_hero, ...indian_hero];
console.log(newAllHero);

console.log("-------convert other datatype into array------------");


console.log(Array.isArray("Hitesh"));  // check whether the given parameter is an Array or not 
console.log(Array.from("Hitesh"));   // it will convert the given parameter into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // .of operator also convert the value into array

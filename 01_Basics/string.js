
console.log("----- STRING ------");

const name = "souravArya";
const repoCount = 50;

console.log(`Hello my name is ${name} and repoCount is ${repoCount}`);

const gameName = new String('sourav'); // here gamename will act as a object and it will have some method 

console.log(gameName[0]);
console.log(gameName.__proto__);

// some useful method of string
console.log(gameName.charAt(2));
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = "    souravkumararya    ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://mail.google.com/%20%20mail/u/0/?tab=rm&ogbl#inbox/FMfcgzGxTFbfvXVRDMhmSgKchSjZMMXq";


console.log(url.replace('%20', '-'));
console.log(url.includes('mail'));
console.log(gameName.split('-'));



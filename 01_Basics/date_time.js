

console.log("----- DATE AND TIME -------");

const myDate = new Date();

console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());

const newDate = new Date(2023, 0, 12);
console.log(newDate);

let myNewDate = new Date("01-14-2023");

let TimeStamp = Date.now();

console.log(TimeStamp);
console.log(myNewDate.getTime());

console.log(Math.floor(Date.now()/1000)); // will give the date in second 

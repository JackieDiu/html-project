// var firstName = "jackie";
// console.log(firstName);

// var lastName = "diu";
// var age = 34;
// console.log(lastName, age);

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "teacher";
// console.log(job);

// var _3years = 3;
// console.log(_3years);

/**************************************************
 * Variable mutation and type coercion
 */

var firstName = "jackie";
var age = 34;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married? " +
    isMarried
);

// Variable mutation

age = "thirty four";
job = "driver";

alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is she married? " +
    isMarried
);

var lastName = prompt("What is her last name?");
console.log(firstName + " " + lastName);

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

// var firstName = "jackie";
// var age = 34;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is she married? " +
//     isMarried
// );

// // Variable mutation

// age = "thirty four";
// job = "driver";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is she married? " +
//     isMarried
// );

// var lastName = prompt("What is her last name?");
// console.log(firstName + " " + lastName);

/*************************************
 * Basic operators
 */

// var year, yearJackie, yearPaul;
// now = 2018;
// ageJackie = 34;
// agePaul = 32;

// // Math operators
// yearJackie = now - ageJackie;
// yearPaul = now - agePaul;

// console.log(yearJackie);
// console.log(yearPaul);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators
// var jackieOlder = ageJackie > agePaul;
// console.log(jackieOlder);

// // typeof operator

// console.log(typeof jackieOlder);
// console.log(typeof ageJackie);
// console.log(typeof "Jackie is older than Paul");
// var x;
// console.log(typeof x);

//Lecture: variable 2

// var name = "jackie";
// var age = 34;
// console.log(name + " " + age);

// var job, isMarried;

// job = "teacher";
// isMarried = true;
// console.log(
//   name +
//     " is a  " +
//     age +
//     " years old " +
//     job +
//     " . Is he married? " +
//     isMarried +
//     "."
// );

// age = "thirty four";
// job = "driver";

// console.log(
//   name +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     ". Is she married " +
//     isMarried +
//     "."
// );

// var lastName = prompt("What is the last name?");
// console.log(lastName);

// alert(
//   name +
//     " is a " +
//     age +
//     " years old " +
//     job +
//     ". Is she married? " +
//     isMarried +
//     "."
// );

/**************************************
 * Operator precedence
 */

var now = 2018;
var yearJackie = 1984;
var fullAge = 34;

// Multiple operators
var isFullAge = now - yearJackie >= fullAge; //true
console.log(isFullAge);

// Grouping
var ageJackie = now - yearJackie;
var agePaul = 32;
var average = (ageJackie + agePaul) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++; //x = x + 1  / x +=1
console.log(x);

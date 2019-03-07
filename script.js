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

// var now = 2018;
// var yearJackie = 1984;
// var fullAge = 34;

// // Multiple operators
// var isFullAge = now - yearJackie >= fullAge; //true
// console.log(isFullAge);

// // Grouping
// var ageJackie = now - yearJackie;
// var agePaul = 32;
// var average = (ageJackie + agePaul) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// // x = x * 2;
// x *= 2;
// console.log(x);

// x += 10;
// console.log(x);

// x++; //x = x + 1  / x +=1
// console.log(x);

/****************************************
 * Operator precedence
 */

//

// //Lecture: operator
// var now = 2018;
// var birthYear = now - 34;

// birthYear = now - 34 * 2;
// // 2018 - 68
// // 1950

// console.log(birthYear);

// var ageJackie = 34;
// var agePaul = 32;

// ageJackie = agePaul = (3 + 5) * 4 - 6;
// //ageJackie = agePaul = 26

// ageJackie++;
// agePaul *= 2;

// console.log(ageJackie);
// console.log(agePaul);

/****************************
 * CODING CHALLENGE 1
 */

// var jackieHeight = 1.62;
// var jackieMass = 73;

// var paulHeight = 1.65;
// var paulMass = 84;

// var bmiJackie = jackieMass / (jackieHeight * 2);
// var bmiPaul = paulMass / (paulHeight * 2);
// console.log(bmiJackie, bmiPaul);

// var isTrue = bmiJackie >= bmiPaul;
// console.log("Is Jackie's BMI higher than Paul's?" + " " + isTrue);

/**************************************************
 * Lecture: if/else statements
 */

// var name = "Jackie";
// var age = 34;
// var isMarried = "yes";

// if (isMarried === "yes") {
//   //if (false)
//   console.log(name + " is married! ");
// } else {
//   console.log(name + " will hopefully marry soon :) ");
// }

// isMarried = true;

// if (isMarried) {
//   console.log("YESS!!");
// } else {
//   console.log("NO!");
// }

// if (isMarried) {
//   console.log("yes!");
// }

// // == type correcion
// // === does not, its better to use and safer

// if (23 === "23") {
//   console.log("something to print...");
// } else {
//   console.log("does not equal the same thing");
// }

/**********************************************************
 * Lecture: boolean logic and switch
 */

// var age = 20;

// if (age < 20) {
//   console.log("Jackie is a teenager");
// } else if (age >= 20 && age < 30) {
//   console.log("Jackie is a young woman");
// } else {
//   console.log("Jackie is a woman");
// }

// var job = "teacher";
// job = prompt("What does Jackie do?");

// switch (job) {
//   case "teacher":
//     console.log("Jackie teaches kids");
//     break;
//   case "driver":
//     console.log("Jackie drives a cab is Lisbon.");
//     break;
//   case "cop":
//     console.log("Jackie helps fights crime");
//     break;
//   default:
//     console.log("Jackie does something else");
// }

/*****************************************************
 * CODING CHALLENGE
 */

// var heightJackie = 155;
// var heightPaul = 159;

// var ageJackie = 34;
// var agePaul = 32;

// var valueJackie = heightJackie + 5 * ageJackie;
// var valuePaul = heightPaul + 5 * agePaul;

// if (valueJackie > valuePaul) {
//   console.log("Jackie wins the game with " + valueJackie + " points!");
// } else if (valuePaul > valueJackie) {
//   console.log("Paul wins the game with " + valuePaul + " points!");
// } else if (valueJackie === valuePaul) {
//   console.log("There is a draw.");
// }

// var heightMary = 162;
// var ageMary = 33;

// var valueMary = heightMary + 5 * ageMary;
// console.log(valueJackie, valuePaul, valueMary);

// if (valueJackie > valuePaul && valueJackie > valueMary) {
//   console.log("Jackie is the winner with " + valueJackie + " points!");
// } else if (valuePaul > valueJackie && valuePaul > valueMary) {
//   console.log("Paul is the winner with " + valuePaul + " points");
// } else if (valueMary > valueJackie && valueMary > valuePaul) {
//   console.log("Mary is the winner with " + valueMary + " points!");
// } else {
//   console.log("It's a draw");
// }

/********************************************
 * If / else statements
 */

// var firstName = "Jackie";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :) ");
// }

// var isMarried = false;
// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

/*************************************
 * Lecture: Functions
 */

// function calculateAge(yearOfBirth) {
//   var age = 2019 - yearOfBirth;
//   return age;
// }

// var ageJackie = calculateAge(1984);
// var agePaul = calculateAge(1986);
// var ageMary = calculateAge(1946);
// console.log(ageJackie, agePaul, ageMary);

// function yearsRetirement(name, year) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement >= 0) {
//     console.log(name + " will retire in " + retirement + " years.");
//   } else {
//     console.log(name + " is already retired.");
//   }
// }

// yearsRetirement("Jackie", 1984);
// yearsRetirement("Paul", 1986);
// yearsRetirement("Mary", 1946);
// yearsRetirement("Peter", 1962);

// function calculateAge(yearOfBirth) {
//   var age = 2019 - yearOfBirth;
//   return age;
// }

// var ageJackie = calculateAge(1984);
// var agePaul = calculateAge(1988);
// var ageRichard = calculateAge(1993);
// console.log(ageJackie, agePaul, ageRichard);

// function yearsUntilRetirement(name, year) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement >= 0) {
//     console.log(name + " retires in " + retirement + " years.");
//   } else {
//     console.log(name + " is already retired.");
//   }
// }

// yearsUntilRetirement("Jackie", 1984);
// yearsUntilRetirement("Paul", 1968);
// yearsUntilRetirement("Richard", 1950);

/****************************************************************
 * The Ternary Operator and Switch Statements
 */

// var firstName = "Jackie";
// var age = 16;

// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

//switch statement

// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in Lisbon.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else");
// }

// switch (true) {
//   case age < 13:
//     console.log(fistName + " is a girl.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young woman.");
//     break;
//   default:
//     console.log(firstName + " is a woman.");
// }

/******************************************************************************
 * Lectures: Statements and Expressions
 */

//  //function statement
//  function someFun(par) {
//    //code
//  }

//  //function expression
//  var someFun = function(par) {
//   //code
//  }

//  //expressions
//  3+4;
//  var x = 3;

//  //statements
//  if(x === 5) {
//    // do something
//  }

/****************************************************
 * Truthy and Falsy values and equality operators
 */

//falsy values: undefined, null, 0, '', NaN
//truthy valuse: NOT falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//   console.log("variable is defined");
// } else {
//   console.log("variable is NOT defined");
// }

// //Equality operator

// if (height === "23") {
//   console.log("The == operator does type coericon!");
// }

/*********************************************************************
 * Lecture: Arrays
 */

// var names = ["Jackie", "Paul", "Hargao"];
// var years = new Array(1984, 1969, 1948);

// console.log(names[0]);
// names[1] = "Ben";
// console.log(names);

// var jackie = ["Jackie", "Diu", 1984, "designer", false];

// jackie.push("blue"); //adds element to the end of the array
// jackie.unshift("Ms."); // adds element to the begging of the array
// jackie.pop(); //removes last element from array
// jackie.shift(); //removes the first element from the array

// console.log(jackie);

// // alert(jackie.indexOf("Diu")); //returns the position of the element that you pass into as argument

// if (jackie.indexOf("teacher") === -1) {
//   console.log("Jackie is not a teacher.");
// }

/************************************************************************
 * CODING CHALLENAGE
 */

// var averageJohn = (98 + 120 + 103) / 3;
// var averageMike = (116 + 100 + 123) / 3;

// // if (averageJohn > averageMike) {
// //   console.log("John is the winner with " + averageJohn + " points.");
// // } else {
// //   console.log("Mike is the winner with " + averageMike + " points.");
// // }

// var averageMary = (97 + 134 + 105) / 3;
// console.log(averageJohn, averageMike, averageMary);

// if (averageJohn > averageMike && averageJohn > averageMary) {
//   console.log("John is the winner with " + averageJohn + " points.");
// } else if (averageMike > averageMary && averageMike > averageJohn) {
//   console.log("Mike is the winner with " + averageMike + " points.");
// } else if (averageMary > averageJohn && averageMary > averageMike) {
//   console.log("Mary is the winner with " + averageMary + " points.");
// } else {
//   console.log("It is a draw.");
// }

/************************************************************************************
 * Lecture: Objects
 */
/* v1.0
var jackie = {
  name: "Jackie",
  lastName: "Diu",
  yearOfBirth: 1984,
  job: "Teacher",
  isMarried: false,
  family: ["jeff", "mark", "bob"],
  calculateAge: function() {
    return 2019 - this.yearOfBirth; //this is referring to the object jackie
  }
};

// console.log(jackie.calculateAge(1974)); //retrieving
console.log(jackie.calculateAge());

console.log(jackie.lastName); // retrieving using dot notation
console.log(jackie["yearOfBirth"]); //retrieving using square brackets

// var xyz = "job";
// console.log(jackie[xyz]);

// jackie.lastName = "Shin"; //mutation
// jackie["job"] = "programmer"; // mutate data in the object

// console.log(jackie);

var age = jackie.calculateAge();
jackie.age = age;

console.log(jackie);


*/

// v2.0

// var jackie = {
//   name: "Jackie",
//   lastName: "Diu",
//   yearOfBirth: 1984,
//   job: "Teacher",
//   isMarried: false,
//   family: ["jeff", "mark", "bob"],
//   calculateAge: function() {
//     this.age = 2019 - this.yearOfBirth;
//   }
// };

// jackie.calculateAge();
// console.log(jackie);

// var jane = new Object();
// jane.name = "Jane";
// jane.lastName = "Smith";
// jane["yearOfBirth"] = 1969;
// jane["job"] = "retired";
// jane["isMarried"] = true;
// console.log(jane);

/////////////////////////////////////////////////////////
// Lecture: Loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, false, end loop!
*/

// var names = ["John", "Jane", "Mary", "Mark", "Bob"];

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

//while loops
// var i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

/************************************************************
 * CODING CHALLENAGE 2
 */

// function printFullAge(yearOfBirth) {
//   var ages = [];
//   var fullAges = [];

//   for (var i = 0; i < yearOfBirth.length; i++) {
//     ages[i] = 2019 - yearOfBirth[i];
//   }

//   for (var i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//       console.log(
//         "Person " +
//           (i + 1) +
//           " is at least 18 and older. " +
//           ages[i] +
//           " years old"
//       );
//       fullAges.push(true);
//     } else {
//       console.log(
//         "Person " + (i + 1) + " is under 18. " + ages[i] + " years old"
//       );
//       fullAges.push(false);
//     }
//   }
//   return fullAges;
// }

// var yearOfBirth = [1984, 1999, 2007, 1967, 2002, 1993];
// var full_1 = printFullAge(yearOfBirth);
// var full_2 = printFullAge([2012, 1915, 1999]);

// function fizzBuzz(num) {
//   for (var i = 1; i <= num; i++) {
//     // console.log(i);
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(20);

/******************************************************************
 * CODING CHALLENGE 3
 * TIP CALCULATOR
 */

// bill = {
//   124 - 15% between $50-$200
//   48 - 20% under $50
//   268 - 10% over $200
// }

// two arrays
// 1. containing all 3 tips (one for each bill)
// 2. containing all 3 finall paid amounts (bill + tip)

// 20% of a value = 20/100 = 0.2

// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill > 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2])
// ];

// var tipValues = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(tips, tipValues);

// function tipCalculator(bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// }

// var bills = [124, 48, 168];
// var tips = [
//   tipCalculator(bills[0]),
//   tipCalculator(bills[1]),
//   tipCalculator(bills[2])
// ];

// var finalValue = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips, finalValue);

var johnsBills = {
  billValues: [124, 48, 268, 180, 42],
  tips: [],
  finalAmount: [],
  calcTips: function() {
    var tip = this.tips;
    var bill = this.billValues;

    for (var i = 0; i < bill.length; i++) {
      if (bill[i] < 50) {
        this.tips.push(0.2 * bill[i]);
        this.finalAmount.push(tip[i] + bill[i]);
      } else if (bill[i] >= 50 && bill[i] < 200) {
        this.tips.push(0.15 * bill[i]);
        this.finalAmount.push(tip[i] + bill[i]);
      } else {
        this.tips.push(0.1 * bill[i]);
        this.finalAmount.push(tip[i] + bill[i]);
      }
    }
    return this.calcTips;
  }
};

johnsBills.calcTips();
console.log(johnsBills);

// function calculator(bill) {
//   for (var i = 0; i <= bill.length - 1; i++) {
//     if (i < 50) {
//       console.log("this is total tip " + i * 0.2);
//     } else if (i >= 50 && i < 200) {
//       console.log("this is total tip " + i * 0.15);
//     } else {
//       console.log("this is total tip " + i * 0.1);
//     }
//   }
// }

// calculator(bills);

/******************************************************
 * Objects and properties
 */

// Object literal

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false
// };

// console.log(john.firstName);
// var x = "birthYear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;

// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.name = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);

/**********************************************
 * Objects and Methods
 */

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2019 - this.birthYear; //function expression
//   }
// };

// john.calcAge();
// console.log(john);

// var john = {
//   fullName: "John Smith",
//   mass: 110,
//   height: 1.89,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * 2);
//     return this.bmi;
//   }
// };

// var mark = {
//   fullName: "Mark Miller",
//   mass: 82,
//   height: 1.67,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * 2);
//     return this.bmi;
//   }
// };

// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + " has a higher bmi of " + john.bmi);
// } else if (mark.bmi > john.bmi) {
//   console.log(mark.fullName + " has a higher bmi of " + mark.bmi);
// } else {
//   console.log("they have the same bmi");
// }

/**************************************************************************
 * Loops and Iteration
 */

// for (var i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to conosole, i++
// .....
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!

// var john = ["John", "Smith", 1990, "designer", false];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and break statements

// var john = ["John", "Smith", 1990, "designer", false, "blue"];

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue;
//   console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// // Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

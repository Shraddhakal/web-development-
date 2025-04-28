// IF ELSE IF
const marks = 80;
// marks>40 && marks<=60 => C
// marks>60 && marks<=80 => B
// marks>80 => A
let grade;
if (marks > 40 && marks <= 60) {
  grade = "C";
} else if (marks > 60 && marks <= 80) {
  grade = "B";
} else {
  grade = "A";
}

const grade_ternary =
  marks > 40 && marks <= 60 ? "C" : marks > 60 && marks <= 80 ? "B" : "A";

// COMPARISON OPERATOR
const str1 = "Hello";
const str2 = "hello world";
console.log(str1 == str2); // lhs and rhs must be equal

const val1 = 10;
const val2 = "10";
console.log(val1 == val2); // true
console.log(val1 === val2); // false
// === doesn't do type conversion. Strict comparison

const val3 = 0;
const val4 = false;
console.log(val3 == val4); //true
console.log(val3 === val4); //false

const day = 5;
if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else {
  console.log("Doesn't match");
}
// SWITCH statement
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Doesn't match in switch");
}

// LOOPS
// ENTRY LEVEL LOOP -> for, while
// EXIT LEVEL LOOP -> do while

// for loop
// for(initialization; condition; iteration){
// block of code
// }

// ++i, i++, i=i+1, i+=1
let i;
for (i = 1; i <= 10; i++) {
  console.log("Value of i is", i);
}
console.log("Value of i", i); // 11

// while loop
// initialization
// while(condition){
//   block of code
//   iteration
// }

let j = 1;
while (j <= 10) {
  console.log("Value of j is", j);
  j = j + 1;
}

// do while loop
// this is always run ATLEAST ONCE.

// initialization
// do{
//block of code
// iteration
// }while(condition)

let k = 10;
do {
  console.log("Value of k is", k);
  k = k + 1;
} while (k >= 20);
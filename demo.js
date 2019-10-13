//This is how you write a single line comment.
/*
This is how
you write 
a multiline
comment
*/
//Data Types and Variables
var number1 = 12; //Btw you can comment like this too.
var number2 = 12.1;
// console.log(number1, number2);
var string1 = "Joel Johnson";
// console.log(string1);
var p;
// console.log(p);
var sathyaVachan = true;
var kallathram = false;
// console.log(sachBolo);
// console.log(kallathram);
var khokla = null;
// console.log(khokla);
var obj = {};
// console.log(typeof obj);
const symbol1 = Symbol("description"); //simply Google it what it is. Even I didn't know it till now.
// console.log(typeof symbol1);

//storing values with Assignment Operator
var a = 101010;
// console.log(a);
//Variable is case Sensitive. uNdErStOoD?
var DOG = "I am a huge and cute dog.";
var dog = "I am a just a cute doggo.";
// console.log(DOG);
// console.log(dog);

//BASIC MATH OPERATION
// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// console.log(number1 % number2);
number1++;
// console.log(number1);
number1--;
// console.log(number1);

//COMPOUND ASSIGNMENT
number1 += 13;
// console.log(number1);
number1 -= 13;
// console.log(number1);
number1 *= 13;
// console.log(number1);
number1 /= 13;
// console.log(number1);
number1 %= 13;
// console.log(number1);

//ESCAPE SEQUENCE
var text1 = 'And the teacher said "It\'s too Easy".';
// console.log(text1);
var text1 = 'You know what this "\\" is?';
// console.log(text1);
var text2 = "I will study tonight.";
var text3 = " I am Joking.";
// console.log(text2 + text3);

// THE LENGTH OF A STRING IS CALCULATED AS FOLLOWS:
// console.log(text3.length);

//ACCESS ELEMENTS FROM A STRING
// console.log(text2[2]);

//STRINGS ARE IMMUTABLE
text3[1] = "w";
// console.log(text3); //See, there's no change.

//ARRAYS
var number_arr = [1, 2, 3, 4, 5];
var anything_arr = [
  3,
  "People",
  "bar",
  1,
  "Pencil",
  1,
  "John Wick",
  "Game Over"
];
// console.log(anything_arr);

//NESTED ARRAYS
var nestme = [1, 2, [3, 4, 5], [6, 7, 8], ["Aeiou", "wsad"]];
// console.log(nestme);

// console.log(number_arr[0]);
number_arr[0] = 100;
// console.log(number_arr);

//PUSH, POP, SHIFT, UNSHIFT
var fruits = ["apple", "banana", "grape", "melon"];
fruits.push("Kiwi");
// console.log(fruits);
fruits.pop();
// console.log(fruits);
fruits.unshift("Strawberry");
// console.log(fruits);
fruits.shift();
// console.log(fruits);

//FUNCTION

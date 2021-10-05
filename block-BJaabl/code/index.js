/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function  sayHello(name){
   alert(`Hello ${name}!`);
}
sayHello("Vivek");

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName, lastName){
   return `${firstName} ${lastName}`
}
let name1 = getFullName("Vivek","Kumar");
alert(name1);
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum,secondNum){
  return `${firstNum + secondNum}`
}
let sum1 = addTwoNumbers(23,25)
alert(sum1);

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA, numB, operation) {
  if (isNaN(numA) || isNaN(numB)) {
    return `Enter valid Input`
  }
  else {
    switch (operation) {
      case 'add': return `sum is ${numA + numB}`;
      break;
      case 'sub': if (numA > numB) { return `subtraction is ${numA - numB}`; }
      else {
        return`subtraction is ${numB - numA}`;
      }break;
      case 'mul': return `multiplication is ${numA * numB}`;
      break;
      case 'div': return `division is ${numA / numB}`;
      break;

    }
  }
}
let result1 = calc (4, 2,'add');
let result2 = calc (5, 2,'mul');
let result3 = calc (8, 2,'sub');
let result4 = calc (8, 2,'div');



alert(result1);
alert(result2);
alert(result3);
alert(result4);



/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(number){
  if (isNaN(number)===true){
    return `Enter valid Input`;
  }
  if (number % 400 === 0){
    return `true`;
  }
  else if (number % 100 === 0){
    return `false`;
  }
  else if(number % 4 === 0){
    return `true`;
  }
  else {
    return `false`;
  }
}

let year1 = isLeapYear(1600);
let year2 = isLeapYear(`hello`);
alert(year1);
alert(year2);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

function getFactorial(num){
 let result=1;
   for (let i=1; i<= num; i++){
     result= result*i;
   }
   return `${result}`;
     
}
let outCome1 = getFactorial(5);
let outCome2 = getFactorial(8);

alert(outCome1);
alert(outCome2);
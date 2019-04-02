'use strict';

//Question 1
//1.  Constant  O(1) - doesn't matter how many other people are in the room, only one operation is performed
//2.  Linear O(n) - loop over however many people are in the room once.

//Question 2
//Constant O(1)  - performs the same number of operations

//Question 3
//Polynomial O(n^2) - two nested loops

//Question 4
//Linear 0(n) - performs the operation once for every element in the array

//Question 5
//Linear O(n) - best case  - constant O(1) if array only has one item / worst case - has to iterate over every element in the array

//Question 6
//Polynomial O(n^2) - two nested loops

//Question 7
// The funciton is an iterative Fibonacci generator. Linear 0(n) - scales based on value of num

//Question 8
//Logarithmic 0(log(n)) - Increase the size of the array and only increases the run time by a small amount

//Question 9
//Constant 0(1) - always performs one operation

//Question 10
//Determines whether a number is prime or not.  Linear 0(n) - increases 1 to 1 based on n

//Question 11
//

//Question 12

const sheep = function (num){
  for (let i = num; i > 0; i--) {
    console.log(`${i}: another jumped over the fence.`);
  }
  console.log('All sheep jumped over the fence.');
};

// console.log(sheep(5));

const powerCalc = function (base, exp) {
  let result = 1;
  for (let i = 1; i <= exp; i++ ){
    result *= base;
  }
  return result;
};

// console.log(powerCalc(2, 0));


const reverseString = function (str) {

  let output = '';

  for (let i = str.length-1; i >= 0; i--) {

    output += str[i];
  }

  return output;
};

// console.log(reverseString('abcdefg'));


const trianglularNumber = function (num) {

  let output = 0;

  for (let i = 1; i <= num; i++) {

    output += i;
  }

  return output;
};

console.log(trianglularNumber(3));

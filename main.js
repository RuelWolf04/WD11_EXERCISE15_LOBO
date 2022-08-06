

// arrow function 
const addition = () => {
  let num1 = document.getElementById('fnumber').value;
 let num2 = document.getElementById('snumber').value;

  let sum = Number(num1) + Number(num2);
  document.getElementById('answer').innerHTML = sum;

};








// let addition = function(){
//   let num1 = document.getElementById('fnumber').value;
//  let num2 = document.getElementById('snumber').value;

//   let sum = Number(num1) + Number(num2);
//   return sum;
// };

let subtraction = function(){
  let num1 = document.getElementById('fnumber').value;
let num2 = document.getElementById('snumber').value;

  let diff = Number(num1) - Number(num2);
  document.getElementById('answer').innerHTML = diff;

};

let multiplication = function(){
  let num1 = document.getElementById('fnumber').value;
let num2 = document.getElementById('snumber').value;

  let product = Number(num1) * Number(num2);
  document.getElementById('answer').innerHTML = product;

};

let division = function(){
  let num1 = document.getElementById('fnumber').value;


let num2 = document.getElementById('snumber').value;

  let quotient = Number(num1) / Number(num2);
  document.getElementById('answer').innerHTML = quotient;

};


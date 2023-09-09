'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const num = prompt(`Enter a number ${i + 1}:`);
  numbers.push(num);
}

const numToCheck = prompt('Enter a number to check:');

if (numbers.includes(numToCheck)) {
  alert(`The number ${numToCheck} is included in the array.`);
} else {
  alert(`The number ${numToCheck} is not included in the array.`);
}

document.getElementById('kohde').textContent =  'Contents of the array: ' + numbers;

numbers.pop();

document.getElementById('kohde').textContent = 'Updated contents of the array: ' + numbers;

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);

document.getElementById('kohde').textContent = 'Sorted contents of the array: ' + numbers;

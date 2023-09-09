'use strict';

const numbers = [];
let jatka = true;

while (jatka) {
  const number = prompt("Anna luku tai kirjoita 'stop'");
  if (number === 'stop') {
    alert('lopetit ohjelman');
    jatka = false;
  }
  numbers.push(number);
}

console.log(numbers);
document.getElementById('kohde').innerHTML = 'Tasaluvut: ';
for (const number of numbers) {
  if (number % 2 === 0) {
    document.getElementById('kohde').innerHTML += number + ' ';
  }
}

'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

const fruitList = fruits.length;

for (let i = 0; i < fruits.length; i++) {
  console.log(`Stuff: ${fruits[i]}`);
}

console.log('The length of the array is: ' + fruitList);

console.log('Element at index 2: ' + fruits[2]);

// document.getElementById('kohde').textContent =  'The length of the array is: ' + fruitList;

const lastIndex = fruits.length - 1;
console.log('Last element: ' + fruits[lastIndex]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const vegetable = prompt(`Enter vegetable ${i + 1}:`);
  vegetables.push(vegetable);
}

console.log('Vegetables entered:');
for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

const veggieList = vegetables.length;

console.log('The length of the array is: ' + veggieList);

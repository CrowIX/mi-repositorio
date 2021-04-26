'use strict';

//Como validar.

//Numero que sea numero.

const num = Number('123r');
console.log(Number.isNaN(num));

if (Number.isNaN(num)) {
  console.log('No es un numero');
} else {
  console.log('Es un numero');
}

//String sea string
console.log('#########################################');

const string = 12;

if (typeof string !== 'string') {
  console.log('No es un string');
} else {
  console.log('Es un string');
}

//Array sea un Array
console.log('#########################################');
const myArray = 'hola';

if (Array.isArray(myArray)) {
  console.log('Es un Array');
} else {
  console.log('No es un Array');
}

//Objeto que sea un objeto

console.log('#########################################');

const myObject = [12, 14, true, false, 'hola'];

if (myObject.constructor.name === 'Object') {
  console.log('Es un objeto');
} else {
  console.log('No es un objeto');
}

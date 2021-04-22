'use strict';

//la declaracion de funcion me permite llamarla antes
//de ser declarada en el codigo, es la unica
//capaz de hacer esto.

function sayHello() {
  return 'Hola';
}

//mientras en la Expresion de funcion, no permite esta
//caracteristica. No se suele usar.

const sayBye = function () {
  return 'Adios';
};

//arrow function: a las arrow function se les puede
//eliminar las llaves, solo si es una funcion simple que
// se resuelve en una linea.

const sayNothing = () => {
  return '.....';
};

const saySomething = () => 'Hey whatsup';

//usarlo en operaciones simples, ahorra codigo.

//Arrays: los arrays funcionan como un bloque de secciones en la cual cada seccion van diferentes variable.

const myArray = Array(3);

console.log(myArray);

const myArray2 = ['amarillo', false, 456];

//Se puede modificar el contenido de un Array aunque lo declares como const.

myArray2[1] = true;
myArray2[2] += 10;

console.log(myArray2);

const numbers = [3, 56, 14, 9, 20, 12, 23, 41];

//se puede usar la propiedad de los arrays nombrearray.length para siempre mosntrar
//todos los elementos del array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//para leer un array al reves.

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

//bucle for of:

for (const number of numbers) {
  console.log(number);
}

console.log('################################################');
// siempre llamar al valor a continuacion de const como el array pero en singular
//ejemplo; numbers = number

const double = [];

for (const number of numbers) {
  double.push(number * 2); //el metodo push nos sirve para introducir valores en un array vacio
}

console.log(double);

//sacar el promedio del array double.

let total = 0;

for (const number of double) {
  total += number;
}

console.log(total / double.length);

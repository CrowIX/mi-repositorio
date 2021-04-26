'use strict';

// los objetos almacenan caracteristicas de una variable.
//se diferencian de los arrays, porque los arrays agrupan muchas variables.
//mientras los objetos almacenan caracteristicas de una variable.

const person = {
  name: 'Carlos',
  age: 32,
  favouriteFood: ['hamburguesa', 'Pizza'],
  pet: {
    name: 'Carbon',
    type: 'gato',
  },
  sayHello: function () {
    console.log(
      `Soy ${person.name} y tengo ${person.age} y mi gato se llama ${person.pet.name}.`
    );
  },
};

console.log(person.sayHello());

//para copiar objetos o arrays sin que tenga problemas

const copiaPerson = {
  ...person,
  favouriteNumber: 14,
};

//! Esta forma de copiar objetos o arrays es super importante para futuras acciones.

//metodo para conocer que funciones se pueden usar con el

console.log(Object.prototype);

//metodo para conocer las propiedades de un objeto

console.log(Object.keys(person));

//destructuring de un array

const nums = [12, 140, 35];

const [a, b, c] = nums; //las comas separan los valores de el array

console.log(a, b, c);

//intercambiar 2 o mas numeros

let x = 100;
let y = 1;
let z = 25;
console.log(x, y, z);
[x, y, z] = [y, z, x];

console.log(x, y, z);

//destructuring con objetos.

const car = {
  brand: 'Opel',
  model: 'Corsa',
};

const { model, brand: marca } = car;

console.log('Destructuring de objetos: ', marca, model);

'use strict';

//condicionales
// For:
// 1. contrador, 2. condicion, 3. iterador.

/* for (let contador = 10; contador > 0; contador--) {
  console.log(contador);
}
 */

// while:

/* let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter += 2;
}

// do while:

let counterB = 10;
do {
  console.log('hola');
} while (counterB < 8);
 */

//Las variables de ambito local pueden acceder a las variables de ambito local
// interriores, por ejemplo, de local scope 3 a 2 a 1 y finalmente a global scope.
/* 
const name = 'Carlos';

{
  let age = 17;
  console.log(age, name);
  {
    let number = 7;
    console.log(number, age, name);
  }
}

console.log(name);
 */
//las variables en ambitos distintos que esten en un local scope interior,
// reescribiran las variables del mismo nombre que esten en ambitos superiores.

//Coercion de tipos: la funcion de + tiene dos vertienes, la suma matematica y la concatenacion.
// por lo tanto si sumamos un numero y un string, por prioridad, javascript va a concatenar.

let a = 4;
let b = '2';

console.log(a + b); //esto nos arrojara como resultado el valor 42 de tipo string.

b = parseInt(b); //con el metodo parseInt podemos convertir nuestro string en un numero.
//pero no convierte decimales por lo tanto elimina los decimales, asi que para los decimales.
//podemos usar parseFloat.

console.log(a + b);

//pero hay un metodo mucho mejor  que es el de Number, que convertira strings tanto en enteros,
// como en decimales.

let c = 7;
let d = '8';

d = Number(d);

console.log(c + d);

//tambien se puede concatenar con tipos.

let p1 = 'Hola';
let p2 = 'soy Sebastian y tengo';
let p3 = 26;
let p4 = 'años.';

console.log(p1 + ' ' + p2 + ' ' + p3 + ' ' + p4);

// es un mejor  metodo  ya que es mucho mas potente usar template strings: `${}`

let t1 = 'Hola soy Sebastian';
let t2 = 'y tengo';
let t3 = 26;

console.log(`${t1} ${t2} ${t3}`);

// usando remplate strings en un for

for (let i = 0; i <= 10; i += 1) {
  console.log(`Repeticón nº ${i + 1}: ${i}`);
}

//alert() es un metodo que muestra popup que se vera en pantalla. Cuando salta un alert,
//El resto del codigo no se ejecutara hasta que se acepte el alert.

alert('Hola soy un alert');

//confirm() es un metodo que nos pide confirmacion por parte del usuario y nos devolvera un
// valor de tipo booleano.

confirm('Estas de acuerdo');

//se puede usar en condicionales.

const response = confirm('Condicional');

if (response) {
  alert('True');
} else {
  alert('False');
}

//Tambien podemos pedir datos desde un popup con el metodo prompt

const name = prompt('Dime tu nombre:');
const age = Number(prompt('Dime tu edad'));

alert(`Hola ${name}! Tienes ${age}.`);

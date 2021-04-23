'use strict';

/* #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 *
 */
const nums = [1, 3, 9, 14, 17, 22];

//let index = 0;

//con while:

/* while (index < nums.length) {
  console.log(nums[index]);
  index++;
}
 */

//Con for:

/* 
for (let index = 0; index < nums.length; index++) {
  console.log(nums[index]);
}
 */

//Con for of:

/* for (const num of nums) {
  console.log(num);
}
 */

// mostrar todos los elementos del array y sumarle 1.

for (let index = 0; index < nums.length; index++) {
  nums[index] += 1;
  //console.log(nums[index] + 1);
}

/* console.log(nums); */

//introducir los valoes de nums en un nuevo array y sumarle 1 a todos.

const numsArray2 = [];

for (const num of nums) {
  numsArray2.push(num + 1);
}

console.log(numsArray2);

//sacar el promedio del segundo array.

let total = 0;

for (const number of numsArray2) {
  total += number;
}

console.log(total / numsArray2.length);

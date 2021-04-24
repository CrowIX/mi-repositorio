/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dado el array [3, 4, 13, 5, 6, 8], muestra por consola qué numeros son pares
 * y qué números son impares.
 *
 * Haz lo mismo pero en este caso indica qué números son primos y cuales no.
 *
 * Por último, crea un nuevo array en el que los valores sean el doble del array
 * original.
 *
 */

'use strict';

//numeros pares e impares.
const nums = [3, 4, 13, 5, 6, 8];

/* for (let index = 0; index < nums.length; index++) {
  const value = nums[index];
  if (value % 2 === 0) {
    console.log(`El ${value} es par`);
  } else {
    console.log(`El ${value} es impar`);
  }
} */

/* // Primos:
function isPrime(num) {
  for (let counter = 2; counter <= num; counter++) {
    if (num % counter === 0) {
      return false;
    }
    return true;
  }
}

for (let i = 0; i < nums.length; i++) {
  const value = nums[i];
  if (isPrime(value) === true) {
    console.log(`el ${value} es primo`);
  } else {
    console.log(`el ${value} No es primo`);
  }
}
 */
// Array con el doble del array original.

const numsArray2 = [];

for (const num of nums) {
  numsArray2.push(num * 2);
}

console.log(numsArray2);

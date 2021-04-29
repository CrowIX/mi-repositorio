/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Ordena el siguiente array numérico de menor a mayor: [4, 10, 7, 1, 2]
 *
 * ¡No se puede usar el método sort()!
 *
 */

'use strict';

const nums = [4, 10, 7, 1, 2];

/* for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      let aux = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = aux;
    }
  }
}
//* Con destructuring

console.log(nums);
 */

for (let i = 0; i < nums.length - 1; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
}

console.log(nums);

/* let exitArray = [];
let candidato;
let long = nums.length;

for (let j = 0; j < long; j++) {
  let minor = 9999999999999999999999999999999999;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minor) {
      candidato = i;
      minor = nums[i];
    }
  }
  nums.splice(candidato, 1);
  exitArray.push(minor);
}

console.log(nums);
console.log(exitArray);
 */

//* con whuile

const result = [];

while (nums.length > 0) {
  let posMenor = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[posMenor] > nums[i]) posMenor = i;
  }
  result.push(nums.splice(posMenor, 1).pop());
}
console.log(result);

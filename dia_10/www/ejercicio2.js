/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea un nuevo array cuyos elementos sean los mismos que los del array original
 * pero sumándoles 10.
 *
 */

'use strict';

const nums = [0, 23, 21, 13, 100];

const plus10 = nums.map((value) => value + 10);

console.log(plus10);

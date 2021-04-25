/**
 * ################
 * ## Pirámide 3 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    12
 *    123
 *    1234
 *    12345
 *
 */

'use strict';

let height = 6;

for (let i = 0; i < height; i++) {
  let row = '';
  for (let nums = 1; nums <= i + 1; nums++) {
    row += nums;
  }
  console.log(row);
}

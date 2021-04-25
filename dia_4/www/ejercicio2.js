/**
 * ################
 * ## Pirámide 2 ##
 * ################
 *
 * Crea una función que reciba una altura y dibuje una figura
 * como la que sigue:
 *
 *    1
 *    22
 *    333
 *    4444
 *    55555
 *
 */

'use strict';
let height = 6;

for (let i = 0; i < height; i++) {
  let row = '';
  for (let nums = 1; nums <= i + 1; nums++) {
    //** este ciclo for se repite hasta que nums valga i+1 e i va aumentando su valor gracias al anterior ciclo for, por lo tanto si i vale 1 este va a tener que dar 2 vueltas e imprimira 2 veces ese valor.*/
    row += i + 1;
  }
  console.log(row);
}

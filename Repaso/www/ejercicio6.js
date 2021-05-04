/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Dada la función "simpleMode(numsArray)" tome el aprámetro numsArray y devuelva el número
 * que aparece con más frecuencia.
 *
 * Por ejemplo: si numsArray contiene [10, 4, 5, 2, 4] la salida debería ser 4. Si hay existen
 * dos números que se repiten el mismo número de veces devuelve el que apareció primero en el
 * array (por ejemplo [5, 10, 10, 6, 5] debería devolver 5 porque apareció primero).
 *
 * Si no hay ningún modo, devuelve -1. El array no estará vacío.
 *
 */

'use strict';
const array1 = [0, 4, 5, 2, 4];
const array2 = [5, 10, 10, 6, 5];
const array3 = [0, 1, 2, 3, 4, 5];

function simpleMode(numsArray) {
  let kept = null;
  for (let i = 0; i < numsArray.length; i++) {
    for (let j = i + 1; j < numsArray.length; j++) {
      if (i === j) {
        kept = kept;
      }
    }
  }
}

/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la función "primerFactorial(num)" toma el parámetro num y devuelve el factorial del mismo.
 *
 * Por ejemplo: si num = 4, entonces tu programa debería devolver (4 * 3 * 2 * 1) = 24.
 *
 */

'use strict';

function primerFactorial(num) {
  let r = 1;
  for (let i = num; i > 0; i--) {
    r *= i;
  }
  return r;
}

console.log(primerFactorial(5));

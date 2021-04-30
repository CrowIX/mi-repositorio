/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Dada la función "longestWord(wordsArray)" tome el parámetro wordsArray y devuelve la palabra
 * más larga del array.
 *
 * Si hay dos o más palabras que tienen la misma longitud, devuelve la primera palabra.
 *
 */

'use strict';

const wordsArray = ['hola', 'adios', 'temperatura', '1548481345464561200'];

function longestWord(words) {
  let longestString = '';
  for (const word of words) {
    if (word.length > longestString.length) {
      longestString = word;
    }
  }
  return longestString;
}

console.log(longestWord(wordsArray));

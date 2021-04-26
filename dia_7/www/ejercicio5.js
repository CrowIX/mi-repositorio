/* #################
 * ## Ejercicio 5 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 *
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 *
 * - Sustituye todas las "e" por "i".
 *
 */

'use strict';

const text = 'Tres tristes tigres tragan trigo en un trigal.';

function charCounter(string, letter) {
  let letterCount = 0;
  string = string.toLowerCase();
  for (let position = 0; position < string.length; position++) {
    if (string.charAt(position) === letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(charCounter(text, ''));

const regex = /e/g;
const replaceText = text.replace(regex, 'i');
console.log(replaceText);

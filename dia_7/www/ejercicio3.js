/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Crea una función que pida una cadena de texto y la devuelva al revés.
 * Es decir, si tecleo "hola que tal" deberá mostrar "lat euq aloh".
 *
 */

'use strict';

const text = 'Hola que tal';

function reverseText(string) {
  string = string.split('').reverse().join('');
  return string;
}

console.log(reverseText(text));

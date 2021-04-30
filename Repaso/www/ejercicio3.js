/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la función "letterCapitalize(string)" tome el parámetro string que se le pasa y ponga
 * en mayúscula la primera letra de cada palabra. Las palabras estarán separadas por un solo espacio.
 *
 */

'use strict';

const string = 'hola Me llamo nacho y tengo doce años';
function letterCapitalize(string) {
  const array = string.split(' ');
  let stringArray = '';
  for (let i = 0; i < array.length; i++) {
    stringArray += ' ' + array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return stringArray;
}
console.log(letterCapitalize(string));

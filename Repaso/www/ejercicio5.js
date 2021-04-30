/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Dada la función "alphabetSoup(string)" tome el parámetro string y devuelve la cadena con las
 * letras en orden alfabético (es decir, "hello" se convierte en "ehllo").
 *
 */

'use strict';

const myString = 'hola';

function alphabetSoup(string) {
  return string.toLowerCase().split('').sort().join('');
}

console.log(alphabetSoup(myString));

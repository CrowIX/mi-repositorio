/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea una función que interprete el contenido entre paréntisis de
 * un string dado.
 *
 *      - El programa debe devolver el texto rodeado por paréntisis.
 *
 *      - Si no hay paréntisis se devolverá un string vacío.
 *
 *      - Si existe paréntisis de apertura pero no de cierre se devolverá
 *        el contenido desde el primer paréntisis hasta el final del string.
 *
 *      - Si existe paréntisis de cierre pero no de apertura se devolverá
 *        el contenido desde el inicio hasta el paréntisis de cierre.
 *
 * Por ejemplo, si el string fuera "Hola (que) tal" se mostrará el "que".
 *
 * Si fuera "Hola (que tal" se devolvería "que tal".
 *
 */

'use strict';

const myString = 'Hola que tal';

/////////////////////////////////

function detector(string) {
  const par1 = string.indexOf('(');
  const par2 = string.indexOf(')');
  if (par1 >= 0 && par2 >= 0) {
    return string.slice(par1 + 1, par2);
  } else if (par1 >= 0 && par2 === -1) {
    return string.slice(par1 + 1);
  } else if (par1 === -1 && par2 >= 0) {
    return string.slice(0, par2);
  } else {
    return '';
  }
}

console.log(detector(myString));

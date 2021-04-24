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

const myString2 = myString;

/////////////////////////////////
//TODO Detector de un parentesis

function detector(value) {
  if (value.includes('(', ')')) {
    let par1 = value.indexOf('(');
    let par2 = value.indexOf(')');
    const myString2 = myString.slice(par1 + 1, par2);
    return myString2;
  } else if (value.localCompare('(') === 0) {
    return '';
  }
}

//console.log(detector(myString));

console.log(detector());

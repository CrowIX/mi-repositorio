/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Hemos visto como podemos recorrer automáticamente un array empleando el bloque
 * for y la propiedad nombreArray.length. Pues de igual modo que recorremos arrays
 * es posible recorrer strings utilizando ese mismo método.
 *
 * Tomemos como referencia el string "JavaScript mola mucho". En este ejercicio
 * deberás mostrar por consola el número total de caracteres que tiene este string
 * SIN CONTAR los espacios. El resultado debería ser 19 para el string anterior.
 *
 */

'use strict';

const text = 'JavaScript mola mucho';

console.log(text.length);

let counter = 0;

for (let i = 0; i < text.length; i++) {
  const space = ' ';
  if (space === text[i]) {
  } else {
    counter++;
  }
}
console.log('###########################################');
console.log(counter);

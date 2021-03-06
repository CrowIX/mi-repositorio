/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético inverso, ¿método sort?
 *
 * Resultado esperado: ["sit", "lorem", "ipsum", "elit", "dolor", "consectetur", "amet", "adipisicing"]
 *
 */

'use strict';

let text = '¡Lorem Ipsum Dolor Sit Amet, Consectetur Elit Adipisicing!';

const regex = /[^A-Za-z ]/g; //expresion regular

text = text.replace(regex, '').toLowerCase().split(' ').sort();

console.log(text);

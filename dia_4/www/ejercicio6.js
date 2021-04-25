/* ################
 * ## Pirámide 6 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a
 * continuación se ha tomado como referencia una altura de 4:
 *
 * - Figura:
 *
 *        *
 *       ***
 *      *****
 *     *******
 *      *****
 *       ***
 *        *
 */

'use strict';

let height = 4;

for (let i = 0; i < height; i++) {
  let row = '';
  for (let space = height; space > i; space--) {
    let emptyspace = ' ';
    row += emptyspace;
  }
  for (let symbol = 0; symbol <= i; symbol++) {
    let asterisk = '*';
    row += asterisk;
  }
  for (let symbol2 = 1; symbol2 <= i; symbol2++) {
    row += '*';
  }
  console.log(row);
}

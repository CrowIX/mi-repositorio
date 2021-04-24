/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dados el siguiente array: [true, false, false, false, true, false, false, false, true]
 *
 *  - Los valores positivos son infectados.
 *
 *  - Los infectados transmiten su enfermedad a los no infectados que tienen a los lados.
 *
 * En este caso el resultado debería ser: [true, true, false, true, true, true, false, true, true];
 *
 */

'use strict';

const pacients = [true, false, false, false, true, false, false, false, true];

//spread operator, copia poco prfunda de un array [...arraycopiar]

const newInfected = [...pacients];

for (let i = 0; i < pacients; i++) {
  //so la persona actual (i) esta infectada...
  if (pacients[i]) {
    //Me aseguro de no meter cosas en la posicion -1
    if (i > 0) {
      newInfected[i - 1] = true;
    }
    // Me aseguro de no infectar a la persona a mi derecha si me encuentro en la ultima posicion del array
    if (i < pacients.length - 1) {
      newInfected[i + 1] = true;
    }
  }
}

console.log(newInfected);

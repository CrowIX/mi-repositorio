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

const infected = [];

// TODO 1.  recorrer el array

for (let i = 0; i < pacients.length; i++) {
  const status = pacients[i];
}

// TODO 2. Comparar el valor si es true o false.

if (status === true) {
  pacients.push(status[i + 1 && i - 1]);
}

// TODO 3. si es true hace que el otro cambie, si es falso no hace nada.

if (pacients[i] === pacients[0]) {
} else if (pacients[i] === pacients[pacients.length]) {
} else {
}

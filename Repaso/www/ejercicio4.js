/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Dada la función "timeConvert(minutes)" toma el parámetro minutes y devuelve el número
 * de horas y minutos a los que el parámetro se convierte (es decir, si minutes = 63 entonces
 * la salida debería ser 1:03). Separe el número de horas y minutos con dos puntos.
 *
 */

'use strict';

function timeConverter(minutes) {
  const num = minutes;
  const hours = Math.floor(num / 60);
  let mins = Math.round((num / 60 - hours) * 60);
  if (mins <= 9) {
    mins = '0' + mins;
  }
  return `${hours}:${mins}`;
}
console.log(timeConverter(69));

/* ############
 * ## Alarma ##
 * ############
 *
 * Simula un despertador que suene cuando pasan "x" segundos.
 *
 * - Muestra los segundos por consola.
 *
 * - Cuando la cuenta llegue a 0, muestra un mensaje indicando que suena la alarma.
 *
 */

function alarm(seconds) {
  const interval = setInterval(() => {
    if (seconds > 0) {
      console.log(seconds);
      seconds--;
    } else {
      console.log('ALARMA');
      clearInterval(interval);
    }
  }, 1000);
}

alarm(10);

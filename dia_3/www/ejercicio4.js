'use strict';
/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 */

alert(
  'Bienvenido usuari@, a continuación debes ayudarme a desactivar la bomba.'
);

alert(
  'Para ello, necesito que ingrese un valor del 1 al 10 y si coincide con la bomba, se desactivará, solo tendrás 5 intentos.'
);

let defuseNumber = Math.round(Math.random() * 10 + 1);
console.log(defuseNumber);

for (let contador = 4; contador >= 0; contador--) {
  let attempt = Number(prompt('Ingresa un nº del 1 al 10'));
  if (attempt > 10 || attempt < 1 || attempt === null || attempt === null) {
    do {
      attempt = Number(
        prompt(
          'Has ingresado un nº invalido, por favor recuerda ingresar un nº entre el 1 y el 10'
        )
      );
    } while (
      attempt > 10 ||
      attempt < 1 ||
      attempt === null ||
      attempt === null
    );
  }
  if (attempt === defuseNumber) {
    alert('¡Lo has logrado, has desactivado la bomba! FELICITACIONES!');
    break;
  } else if (contador === 0) {
    alert(
      '¡Oh no, la bomba ha explotado!, pero no te sientas mal, siempre puedes volver a intentarlo'
    );
  } else {
    alert(
      `El nº ${attempt} que has ingresado no es el correcto, te quedan: ${contador} intentos. Deberas ingresar otro nº`
    );
  }
}

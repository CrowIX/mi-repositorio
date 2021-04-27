/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * En algún momento hemos llegado a hablar de las clases, que no son más que una plantilla
 * a partir de la cuál nosotros podemos crear nuevos objetos. Aunque no hemos visto como es
 * su estructura es posible recrear su comportamiento.
 *
 * En el siguiente ejercicio crearás una función que permita crear animales. Por tanto la fun-
 * ción ha de recibir tantos argumentos como valores queramos que tenga nuestro animal. Vamos
 * a imaginarnos que la estructura de un animal será algo como:
 *
 *      const animal = {
 *          name: 'Peludo',
 *          type: 'perro',
 *          gender: 'macho',
 *          legs: 4,
 *          color: 'blanco',
 *          getInfo: function() {
 *              console.log(`Es un ${type} ${color}, su género es ${gender}, tiene ${legs} patas y se llama ${name}`)
 *          }
 *      }
 *
 * ¡Ojo! No es posible acceder a las propiedades del animal tal y como lo he hecho en el ejemplo anterior.
 *
 */

'use strict';

function animalCreator(name, type, gender, legs, color) {
  return {
    name,
    type,
    gender,
    legs,
    color,
    getInfo: function () {
      console.log(
        `Es un ${this.type} ${this.color}, su género es ${this.gender}, tiene ${this.legs} patas y se llama ${this.name}`
      );
    },
  };
}

console.log(animalCreator('Tigre', 'Felino', 'Macho', 4, 'Naranja'));

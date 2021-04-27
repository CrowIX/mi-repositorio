/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Crea el objeto persona con las propiedades name y age. A mayores, crea un método que reciba un
 * array de animales y genere una nueva propiedad favoriteAnimals que almacene dicho array.
 *
 * Crea un segundo método que permita modificar cualquier propiedad del objeto. Este método debe
 * recibir dos argumentos, el nombre de la propiedad en formato string, y el valor que queremos
 * meter en la misma.
 *
 */

'use strict';

const person = {
  name: 'manolo',
  age: 12,
  animalsList: function (animales) {
    person.favoriteAnimals = animales;
  },
  changePropiedad: function (propiedad, valor) {
    this[propiedad] = valor;
  },
};

person.animalsList(['gato', 'perro']);
console.log(person.favoriteAnimals);
person.changePropiedad('name', 'pepito');
console.log(person.name);
person.changePropiedad('age', 25);
console.log(person.age);

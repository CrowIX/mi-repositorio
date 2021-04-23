'use strict';

//Array en el que iremos pusheando elementos.

const result = [];

let userContent;

do {
  // permitimos al usuario añadir un nuevo elemento
  userContent = prompt('Introduce lo que sea');
  //condicion para no agregar fin
  if (userContent !== 'fin') {
    //Pusheamos el  contenido en el array result
    result.push(userContent);
  }
} while (userContent !== 'fin' && userContent !== 'Fin');

console.log(result);

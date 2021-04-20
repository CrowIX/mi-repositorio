'use strict';

const name = prompt('Hola Usuari@ dime tu nombre');
const lastName = prompt('Ahora dime tu apellido');
const response = confirm('Te apetece un café');

if (response) {
  alert(
    `¡Bienvenid@ ${name} ${lastName}! En breve recibirá su café calentito en casa.`
  );
} else {
  alert(
    `¡Bienvenid@ ${name} ${lastName}! Para el que no quiere yo tengo mucho`
  );
}

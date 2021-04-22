'use strict';
//funciones: Se usan para no repetir codigo.
// Se pueden declarar de 3 formas:
//1. Declaracion de funcion:

/**
 * 
 * @param {*} name  //con //** */ // se pueden abrir parametros.
 * @returns 
 */
function sayHello(name = 'Jose') {
  return `HELLO!!!!!!!!! ${name}`;
}

//Cada vez que se llama una funcion se crea un nuevo
//contexto de ejecucion local.
//Solo cuando llamamos a la funcion no cuando la declaramos.

console.log(sayHello('Sebas'));
console.log(sayHello());

function

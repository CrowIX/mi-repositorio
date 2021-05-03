//API's, asincronia & event looper.

//API:

//* Las APIS son bases de datos para abastecernos de informacion,
//* podemos realizarlas nosotros o recurrir a una ya hecha.
//* Son super utiles y nos permiten ahorrar muchismo tiempo sin necesidad de realizarlas nosotros mismos.
//* El navegador cuenta con web API's estan integradas al navegador web y son accesibles al objeto window.

//Asincronia:

//* el metodo setTimeout() ya ejerce asincronia, por lo tanto se ejecuta despues
//! nunca se va a ejecutar antes.

const myTimeout = setTimeout(() => console.log('Hola'), 3000);

clearTimeout(myTimeout); //* clearTimeout puede parar la ejecucion del setTimeout por medio de la referencia

const myInterval = setInterval(() => console.log('¡Alarma!'), 1000); //* ejecuta codigo segun el intervalo que le demos en el segundo argumento en milisegundos.

/* clearInterval(myInterval); //* para parar un intervalo */

setTimeout(() => clearInterval(myInterval), 1000);

//Event Looper:

//* El event looper es un bucle infinito que determina si hay tareas en javascript.

//Promesas:

//* Las promesas nos permite reestructurar los callback hells y eliminar esas dependencias.
//* Las promesas son objetos, que puede estar disponible ahora, futuro o nunca.
//* Representan una funcion asincrona.

//TODO pending: estado inicial de una promesa, no se ha cumplido ni ha sido rechazada.
//* Fullfiled: tu promesa se ha completado porque se ha ejecutado.
//! Rejected: tu promesa se ha rechazado y no se va a ejecutar.

//* El callback de la promesa se llama ejecutor, los parametros son resolve, reject.

const myPromise = new Promise((resolve, reject) => {
  const random = Math.ceil(Math.random() * 9);
  setTimeout(() => {
    if (random <= 5) {
      resolve('Todo bien');
    } else {
      reject('Todo mal');
    }
  });
});

//* Hay dos metodos que nos permite obtener los datos de la promesa.
//* mipromesa.then((data) => console.log(data)) en caso de fulfilled
//* mipromesa.catch((error) => console.log(error)) en caso de rejected
//* mipromesa.finally(() => console.log('me ejecuto si o si'))

myPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log('Me ejecuto si o si'));

//*Concatenar los metodos de la promesa.

//Peticiones a API's

//*Con el metodo fetch()

fetch('https://rickandmortyapi.com/api/character') //esto recive una url en formato string y devuelve una promesa en formato json
  .then((response) => response.json()) //el metodo json devuelve una promesa por lo tanto toca usar otro then
  .then((characters) => console.log(characters.info.pages))
  .catch((error) => console.log(error));

'use strict'; //activa el modo estricto de javascript.
//Al declarar una variable, usar nombres en ingles, sin acentos o 'ñ', de ser necesario solo usar '_' o '$' al inicio de una variable para declararla.

//ejercicio 1:

/* const myName = 'Sebastian';
let favoriteNumber = 13;

console.log(myName, favoriteNumber);

favoriteNumber = 35;

console.log('Cambio del número favorito a:', favoriteNumber);

console.log(typeof myName, typeof favoriteNumber);
 */

//operadores matematicos

/*
let age = 10;

age = age + 5;

age += 5; // age = age + 5

age -= 5; // age = age - 5

age *= 2; // age = age * 2

age ++   // incremento en 1

age --   // decremento en 2

age + 1

age - 2

age * 3  // age multiplicado por 3

age / 2  // age dividido entre 2

age ** 2 // age potenciado al cuadrado

age % 2 // age modulo 2 (restante de la division)

console.log(age);

*/

//operadores logicos

/* 

a y b hacen referencia a variables.

a === b // igual que

a !== b // distinto que

a > b   // mayor que

a < b  // menor que

a >= b // mayor igual que

a <= b // menor igual que

a && b // devuelve TRUE  si ambas condiciones se cumplen

a || b // devuelve TRUE si al menos una de las condiciones se cumple

!a     //  niega la condicion, si el boolean es TRUE pasa a ser FALSE y viceversa

*/

//ejercicio 2:

/* const num_a = 8;
const num_b = 2;

console.log(num_a + num_b);
console.log(num_a - num_b);
console.log(num_a ** num_b);
console.log(num_a + num_b, num_a - num_b, num_a ** num_b); */

//Condiciones

// 1. If Else

/* let adult = true;

if (adult) {
  console.log('mayor de edad');
} else {
  console.log('menor de edad');
}
*/

// 2. else if
/* let animal = 0;

if (animal === 0) {
  console.log('perro');
} else if (animal === 1) {
  console.log('gato');
} else if (animal === 2) {
  console.log('elefante');
} else {
  console.log('No se reconoce el animal');
} 
*/

// 3. Switch

/* let animal = 0;

switch (animal) {
  case 0: //se puede agregar condiciones debajo de cada case
    console.log('perro');
    break;
  case 1:
    console.log('gato');
    break;
  case 2:
    console.log('elefante');
    break;
  default:
    console.error('No se reconoce el animal');
}
 */

//ejercicio 3:
/* Crea una calculadora con 'if' que opere con dos numeros. La calculadora 
utilizara la variable 'option' para decidir el tipo de operacion a realizar.
Debe poder sumar, restar, multiplicar y dividir. A mayores debe permitir 
elevar el numero A a la potencia de B.

punto extra: no se puede dividir entre 0 
*/

/* // suma 1, resta 2, multiplicacion 3, potenciacion 4, division 5

let val1 = 1;
let val2 = 2;
let option = 4;

if (val1 === undefined && val2 === undefined) {
  console.log('No se ha ingresado ninguno de los valores.');
} else if (val1 === undefined) {
  console.log('No se ha ingresado el primer valor.');
} else if (val2 === undefined) {
  console.log('No se ha ingresado el segundo valor.');
} else {
  if (option === 1) {
    console.log('La suma de los valores es:', val1 + val2);
  } else if (option === 2) {
    console.log('La resta de los valores es:', val1 - val2);
  } else if (option === 3) {
    console.log('La multiplicación de los valores es:', val1 * val2);
  } else if (option === 4) {
    console.log('La potenciación de los valores es:', val1 ** val2);
  } else if (option === 5) {
    if (val1 === 0 && val2 === 0) {
      console.log('No es posible dividir entre 0');
    } else if (val1 === 0) {
      console.log(0);
    } else if (val2 === 0) {
      console.log('No es posible dividir entre 0');
    } else {
      console.log('La división de los valores es:', val1 / val2);
    }
  } else if (option > 5 || option < 1) {
    console.log('No ha elegido una opcion correcta');
  } else {
    console.log('No ha elegido ninguna opcion');
  }
} */

//ejercicio 4:
/* 
Hacer lo mismo que el ejercicio 3 pero con el condicional switch.
*/

let val1;
let val2;
let option;
// suma 1, resta 2, multiplicacion 3, potenciacion 4, division 5

switch (val1 && val2) {
  case undefined:
    console.log(' Uno o mas valores no han sido ingresados');
    break;
  default:
    switch (option) {
      case 1:
        console.log('La suma de los valores es:', val1 + val2);
        break;
      case 2:
        console.log('La resta de los valores es:', val1 - val2);
        break;
      case 3:
        console.log('La multiplicación de los valores es:', val1 * val2);
        break;
      case 4:
        console.log('La potenciación de los valores es:', val1 ** val2);
        break;
      case 5:
        if (val1 === 0 && val2 === 0) {
          console.log('No es posible dividir entre 0');
        } else if (val1 === 0) {
          console.log(0);
        } else if (val2 === 0) {
          console.log('No es posible dividir entre 0');
        } else {
          console.log('La división de los valores es:', val1 / val2);
        }
        break;
      default:
        console.log('No se ha elegido una opcion valida.');
        break;
    }
    break;
}

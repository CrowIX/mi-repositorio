'use strict';

//metodos con strings

const myString = '¡Metodos con strings!';

// contar caracteres.
console.log(myString.length);

//ccambiar a lowercase.

console.log(myString.toLowerCase());

//lo mismo para uppercase
console.log(myString.toUpperCase());

//buscar la posicion de un caracter en un string o una palabra, siempre empezando por la posicion de la letra.
// que encuentre primero de izquierda a derecha.

console.log(myString.indexOf('o')); //si devuelve un -1 eso quiere decir que el caractes no existe.

console.log(myString.lastIndexOf('o')); // lo mismo pero desde derecha a izquierda

console.log(myString.indexOf('o', 5)); //con el segundo valor despues de la coma podemos decidir desde que posicion recorrer el string.

//TODO ESTUDIAR METODOS DE STRINGS SI O SI! SON SUPER IMPORTANTES.

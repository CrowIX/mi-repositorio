//continuacion de metodos con strings...

//Los metodos no modifican la variable original.

//repeat(number): nos repetira el string el numero de veces que pongamos

const myString = '¡Métodos con strings!';
console.log(myString.repeat(3));

console.log('#################################');

//replace('str', 'str reemplazo'): reemplaza la primer coincidencia que encuentre de izquierda a derecha.

console.log(myString.replace('o', 'i'));

//con replaceAll se reemplazan todas las coincidencias

console.log(myString.replaceAll('o', 'i'));

console.log(myString.replaceAll('strings', 'arrays'));

console.log('##################################');

//split() = separara los elementos de nuestro string en un array
//el valor del parentesis es eliminado

console.log(myString.split(''));
console.log(myString.split(' con '));

const myString2 = `Métodos con strings!
Métodos con strings!`;

console.log(myString2.split('\n')); //tambien elimina los saltos de linea de los template strings

console.log(myString.split('', 2)); //Se puede agregar un limite a el split.

//slice me permite cortar strings dentro de cualquier variable, recibe 2 parametros
//donde inicia y donde termina, el primer valor es obligatorio.

console.log('##################################');

console.log(myString.slice(1, 8));

// localeCompare() nos permite comparar dos strings, devuelve 1 o 0

console.log('##################################');
const miAnimal1 = 'araña';
const miAnimal2 = 'ARANA';

console.log(miAnimal1.localeCompare(miAnimal2));

console.log('##################################');

//Metodos con Arrays:

const fruits = ['manzana', 'pera', 'plátano', 'pera', 'naranja'];

//indexOf, lo mismo que el uso de strings.
//lasIndexOf, lo mismo que el uso de strings.
//unShift() el nuevo elemento empuja a todos los demas elementos dentro del array, por lo tanto queda al inicio.
//pop() elimina un elemento del array, si se deja vacio el valor se elimina el ultimo elemento.
//ademas de eliminar el ultimo elemento, lo devuelve por lo tanto podemos almacenar el valor en una nueva variable.
//shitf() elimina el primer elemento del array
//reverse() el metodo reverse invierte el orden de los elementos en el array.
//join() permite unir los elementos de un array en un string.
//splice(index, limit, item_n) elimina un elemento o varios elementos del array sin importar donde esten.
//tambien devuelve los elementos en array
let nums = '123456789';
nums = nums.split('');
nums = nums.reverse();
nums = nums.splice(0, 5);
console.log(nums);
nums = nums.join('');
//nums = Number(nums); //el 0 a la izquierda no vale nada, por lo tanto no se mostrara
console.log(nums);

/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 *   1. Obtén todos los coches de la marca Audi.
 *
 *   2. Obtén una lista con todos los colores de los coches de marca BMW.
 *
 *   3. Obtén la media de precio de los coches de marca Ford.
 *
 *   4. Obtén un array con las distintas marcas de coches (no se pueden repetir).
 *
 *   5. Obtén un array con los coches de transmisión manual y de color negro.
 *
 *   6. Obtén la suma total de todos los precios.
 *
 */

'use strict';

const coches = [
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A6',
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: 'Rojo',
    transmision: 'automatico',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Chevrolet',
    modelo: 'Camaro',
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A3',
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: 'Rojo',
    transmision: 'manual',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2019,
    precio: 90000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Ford',
    modelo: 'Mustang',
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: 'Negro',
    transmision: 'manual',
  },
  {
    marca: 'Dodge',
    modelo: 'Challenger',
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: 'Azul',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 3',
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'BMW',
    modelo: 'Serie 5',
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: 'Negro',
    transmision: 'automatico',
  },
  {
    marca: 'Mercedes Benz',
    modelo: 'Clase C',
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: 'Blanco',
    transmision: 'automatico',
  },
  {
    marca: 'Audi',
    modelo: 'A4',
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: 'Azul',
    transmision: 'automatico',
  },
];

//1. Obtén todos los coches de la marca Audi.
console.log('### Todos los coches de marca Audi:');

const audiCars = coches.filter((car) => car.marca === 'Audi');
console.log(audiCars);

//2. Obtén una lista con todos los colores de los coches de marca BMW.
console.log('### Lista de los colores de los coches de marca BMW:');

const bmwCarsColors = coches
  .filter((car) => car.marca === 'BMW')
  .map((car) => car.color);

console.log(bmwCarsColors);

//3. Obtén la media de precio de los coches de marca Ford.
console.log(
  '### Promedio del precio de los coches de Marca Ford (valor redondeado):'
);

function average(values) {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum / values.length;
}

const fordPrice = coches
  .filter((car) => car.marca === 'Ford')
  .map((car) => car.precio);

const fordAveragePrice = average(fordPrice);

console.log(Math.round(fordAveragePrice));

//4. Obtén un array con las distintas marcas de coches (no se pueden repetir).
console.log('### Lista con las distintas marcas de coches:');

function removeDuplicates(data) {
  return [...new Set(data)]; // [...] expres operator para copiar los contenidos del objeto creado con Set dentro de un nuevo array
}

const vehiclesBrands = coches.map((car) => car.marca);
console.log(removeDuplicates(vehiclesBrands));

//5. Obtén un array con los coches de transmisión manual y de color negro.
console.log('### Coches con transmision manual y de color negro:');

const manualTransmissionBlackColor = coches.filter(
  (car) => car.color === 'Negro' && car.transmision === 'manual'
);

console.log(manualTransmissionBlackColor);

//6. Obtén la suma total de todos los precios.
console.log('### Suma de todos los precios de los coches:');

function totalSum(values) {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
}

const carsPrices = coches.map((car) => car.precio);

const totalPrice = totalSum(carsPrices);

console.log(totalPrice);

/* const num = new Number(15);

console.log(num);

const repeatedValues = [12, 12, 52, 84, 52, 13];

const filteredNumbers = new Set(repeatedValues); //set crea un nuevo objetos con valores unicos

console.log([...filteredNumbers]); // luego se puede filtrar a un array y listo. 
*/

'use strict';
//metodos con callbacks

// Metodo sort()

const words = ['rebanada', 'tomate', 'algo', 'ahora', 'montaña'];

const numbers = [3, 31, 100, 1, 11, 34, 5];

const orderNumbers = (a, b) => a - b; //si lo queremos de menor a mayor cambiamos a (b - a)

console.log(numbers.sort(orderNumbers));
console.log(numbers.sort((a, b) => b - a));
console.log(words.sort());

//metodo map() nos devuelve un array con la misma longitud que el array al que se le aplica el metodo.

const numbers2 = [2, 4, 13, 24];

const myMapCallback = (num, index) => {
  //usar el singular del array al que queremos apuntar.

  console.log('value:', num);
  console.log('index:', index);
  console.log('=======================');
  return num / 2;
};

const result = numbers2.map(myMapCallback);

console.log(result);

const clothes = ['pantalon', 'camisa', 'calcetines'];
const prices = [20, 15, 5];

const itemList = clothes.map((cloth, index) => {
  return {
    name: cloth,
    price: prices[index],
  };
});

console.log(itemList);

//metodo filter() nos permite filtrar elementos de un array y nos devuelve un array con la longitud de los elementos que cumplan la condicion que le pasemos.

const prices2 = [15, 13, 5, 20, 2, 7, 9];

const over10 = prices2
  .filter((prices2) => {
    return prices2 > 10;
  })
  .sort((a, b) => a - b);

console.log(over10);

//////////////////////////////////////////////////////
//recorriendo un array de objetos.

const food = [
  {
    name: 'pizza',
    price: 4,
  },
  {
    name: 'atun',
    price: 2.5,
  },
  {
    name: 'tomate',
    price: 1,
  },
  {
    name: 'mucho queso',
    price: 10,
  },
  {
    name: 'jamon iberico',
    price: 15,
  },
];

const over5 = food.filter((value) => value.price > 5);

const result2 = over5.map((value) => value.price);

console.log(over5);
console.log('#####################################');
console.log(result2);

//metodo reduce()

const numbers3 = [3, 2, 5, 10];

const totals = numbers3.reduce((acc, num, i) => {
  console.log(`${acc} += ${num}`);

  acc += num;

  console.log(`Index ${i}. Acc =`, acc);
  console.log('====================================');
  return acc;
}, 0);
// acc = acumulador, num = valores dentro del array, i = indice de los elementos dentro del array

console.log(totals);

//metodo some() funciona para encontrar un valor. Y retorna un valor booleano.

const fruitBasket = [
  'naranja',
  'naranja',
  'limón',
  'pera',
  'limón',
  'plátano',
  'naranja',
];

const result3 = fruitBasket.some((fruit) => fruit === 'sandia');

console.log(result3);

//metodo every() para encontrar todos los valores.

//metodo find() encuentra un unico elemento. O el primer elemento que cumpla condiciones.

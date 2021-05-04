'use strict';

const sum = async (a, b) => a + b;

const getResult = async () => {
  const result = await sum(4, 4);
  console.log(result);
};

getResult();

//Await solo se puede usar dentro de una funcion asincrona.

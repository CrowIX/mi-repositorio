//la funcion genera numeros dependiendo del length, y por cada numero va a mostrar
//un resultado generado por la funcion getRandomNumber.

function quinielaGenerator(lenght) {
  for (let i = 0; i < lenght; i++) {
    console.log(`Resultado ${i + 1}: ${getRandomResult()}`);
  }
}

// Se hace una funcion que retorne 3 valores y si es 0 le damos el valor 'X'
const getRandomResult = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return 'X';
  return randomNumber;
};

quinielaGenerator(14);

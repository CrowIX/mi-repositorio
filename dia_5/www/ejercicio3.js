'use strict';

// TODO 1. Generar un valor entero aleatorio del 1 al 6.

const dice = () => Math.ceil(Math.random() * 6);

// TODO 3. Contador para almacenar de los dados.

let total = 0;
// TODO 2. Empezamos a tirar los dados.

for (let i = 1; total < 100; i++) {
  //valor de tirada.
  const diceValue = dice();

  // TODO 3. En cada tirada acumulamos los valores que saque el dado.
  total += diceValue;

  console.log(
    `tirada ${i}, ha salido un ${diceValue} y tienes un total de ${total} puntos `
  );
  console.log('=================================');
}

// TODO 4 . Si el valor es igual a 100 puntos o un valor superior el bucle for finaliza.

console.log('FIN DE LA PARTIDA!');

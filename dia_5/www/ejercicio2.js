'use strict';

// Para sacar la media sumar valores, luego dividir
// por la cantidad de valores.

const averageTeams = (val1, val2, val3, val4) =>
  (val1 + val2 + val3 + val4) / 4;

const teamA = averageTeams(35, 46, 29, 58);

console.log('Resultado del equipo A', teamA);

const teamB = averageTeams(46, 72, 26, 36);

console.log('Resultado del equipo B', teamB);

const teamC = averageTeams(38, 62, 47, 44);

console.log('Resultado del equipo C', teamC);

if (teamA > teamB && teamA > teamC) {
  console.log(
    `El mejor equipo con la media es el A con (${teamA}) puntos de media`
  );
} else if (teamB > teamC) {
  console.log(
    `El mejor equipo con la media es el B con (${teamB}) puntos de media`
  );
} else {
  console.log(
    `El mejor equipo con la media es el A con (${teamC}) puntos de media`
  );
}

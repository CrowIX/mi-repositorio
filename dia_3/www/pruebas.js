/* let attempt = Number(prompt('Ingresa numero'));

while (attempt > 10) {
  attempt = Number(prompt('Ingresa numero'));
}
console.log('sali del bucle'); */

let attempt;

do {
  attempt = Number(prompt('Ingresa numero'));
} while (attempt > 10 || attempt < 1);

alert('Sali del bucle');

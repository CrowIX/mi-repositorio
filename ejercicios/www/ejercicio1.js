//Comprara arrays e ir sumando puntos al que tenga el valor mas alto en el indice actual.

function compareTriplets(a, b) {
  let pointsA = 0;
  let pointsB = 0;
  const result = [];
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      pointsA++;
    } else if (a[i] < b[i]) {
      pointsB++;
    }
  }
  result.push(pointsA, pointsB);
  return result;
}

let arrayA = [5, 6, 7];
let arrayB = [3, 6, 10];

console.log(compareTriplets(arrayA, arrayB));

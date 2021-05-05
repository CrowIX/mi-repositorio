//Sumar elementos de un array.

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  let sum = ar.reduce((a, b) => a + b);
  return sum;
}

aVeryBigSum(ar);

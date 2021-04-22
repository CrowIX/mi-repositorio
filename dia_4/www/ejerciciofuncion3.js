'use strict';

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function allPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) console.log(`El nº ${i} es primo`);
  }
}

allPrimes(35);

function calculator(val1, val2, option) {
  if (val1 === undefined && val2 === undefined) {
    throw new Error('No se ha ingresado ninguno de los valores.');
  } else if (val1 === undefined) {
    throw new Error('No se ha ingresado el primer valor.');
  } else if (val2 === undefined) {
    throw new Error('No se ha ingresado el segundo valor.');
  } else {
    if (option === 1) {
      return val1 + val2;
    } else if (option === 2) {
      return val1 - val2;
    } else if (option === 3) {
      return val1 * val2;
    } else if (option === 4) {
      return val1 ** val2;
    } else if (option === 5) {
      if (val1 === 0 && val2 === 0) {
        throw new Error('No es posible dividir entre 0');
      } else if (val1 === 0) {
        return 0;
      } else if (val2 === 0) {
        throw new Error('No es posible dividir entre 0');
      } else {
        return val1 / val2;
      }
    } else if (option > 5 || option < 1) {
      throw new Error('No ha elegido una opcion correcta');
    } else {
      throw new Error('No ha elegido ninguna opcion');
    }
  }
}

const num1 = Number(prompt('Ingrese el primer valor'));
const num2 = Number(prompt('Ingrese el segundo valor'));
const operation = Number(prompt('Ingrese la operacion'));
const result = calculator(num1, num2, operation);

alert('El resultado es:', result);

console.log(calculator(num1, num2, operation));
console.log(result);

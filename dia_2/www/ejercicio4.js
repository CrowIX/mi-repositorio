'use strict';
// suma 1, resta 2, multiplicacion 3, potenciacion 4, division 5

let val1 = 1;
let val2 = 1;
let option = 5;

switch (val1 && val2) {
  case undefined:
    throw new Error(' Uno o mas valores no han sido ingresados');
  default:
    switch (option) {
      case 1:
        console.log('La suma de los valores es:', val1 + val2);
        break;
      case 2:
        console.log('La resta de los valores es:', val1 - val2);
        break;
      case 3:
        console.log('La multiplicación de los valores es:', val1 * val2);
        break;
      case 4:
        console.log('La potenciación de los valores es:', val1 ** val2);
        break;
      case 5:
        if (val1 === 0 && val2 === 0) {
          throw new Error('No es posible dividir entre 0');
        } else if (val1 === 0) {
          console.log(0);
        } else if (val2 === 0) {
          throw new Error('No es posible dividir entre 0');
        } else {
          console.log('La división de los valores es:', val1 / val2);
        }
        break;
      default:
        throw new Error('No se ha elegido una opcion valida.');
    }
    break;
}

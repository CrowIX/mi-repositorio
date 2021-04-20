// suma 1, resta 2, multiplicacion 3, potenciacion 4, division 5

let val1 = 1;
let val2 = 2;
let option = 5;

if (val1 === undefined && val2 === undefined) {
  console.log('No se ha ingresado ninguno de los valores.');
} else if (val1 === undefined) {
  console.log('No se ha ingresado el primer valor.');
} else if (val2 === undefined) {
  console.log('No se ha ingresado el segundo valor.');
} else {
  if (option === 1) {
    console.log('La suma de los valores es:', val1 + val2);
  } else if (option === 2) {
    console.log('La resta de los valores es:', val1 - val2);
  } else if (option === 3) {
    console.log('La multiplicación de los valores es:', val1 * val2);
  } else if (option === 4) {
    console.log('La potenciación de los valores es:', val1 ** val2);
  } else if (option === 5) {
    if (val1 === 0 && val2 === 0) {
      console.log('No es posible dividir entre 0');
    } else if (val1 === 0) {
      console.log(0);
    } else if (val2 === 0) {
      console.log('No es posible dividir entre 0');
    } else {
      console.log('La división de los valores es:', val1 / val2);
    }
  } else if (option > 5 || option < 1) {
    console.log('No ha elegido una opcion correcta');
  } else {
    console.log('No ha elegido ninguna opcion');
  }
}

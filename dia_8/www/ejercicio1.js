'use strict';

const coche = {
  modelo: 'Camaro SS',
  marca: 'Chevrolet',
  color: '',
};

coche.color = 'Negro';

coche.añoDeMatriculacion = 1969;

console.log(coche);

if (
  confirm('Para ver las propiedades, acepta. Para ver los valores cancela.') ===
  true
) {
  alert(
    `Su vehiculo contiene las siguientes propiedades: ,
    ${Object.keys(coche)}`
  );
} else {
  alert(
    `Su vehiculo contiene los siguientes valores:  ${Object.values(coche)}`
  );
}

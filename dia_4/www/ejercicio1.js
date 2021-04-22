'use strict';

let row = '';
let height = Number(prompt('Ingresa la altura de la piramide'));

for (let i = 0; i < height; i++) {
  row += '😎';
  console.log(row);
}

/**
 * #################
 * ## Ejercicio 7 ##
 * #################
 *
 * La constante data simula el contenido de un fichero ".csv". Podemos imaginar
 * que se trata de una tabla con filas y columnas. La primera fila de este tipo
 * de ficheros indica el nombre de cada columna.
 *
 * Por ejemplo, la primera columna se llama "id". Como podéis ver cada fila
 * tiene un "id" distinto: 142, 143, 144, etc. Lo mismo pasa para las demás
 * columnas. Por tanto, podemos entender que cada fila es una entidad de la
 * tabla, en este caso un piso.
 *
 * El objetivo de este ejercicio es convertir la información almacenada en data
 * en un array en el que cada posición sea un piso. El resultado final debería
 * ser algo similar a:
 *
 *    [
 *      ["142", "88", "12", "3", "1", "true", "false"],
 *      ["143", "120", "10", "4", "2", "false", "false"],
 *      ["144", "46", "18", "1", "1", "true", "true"],
 *      ["145", "52", "8", "1", "1", "true", "true"],
 *      ["146", "60", "3", "1", "1", "true", "true"],
 *      ["147", "140", "4", "4", "2", "true", "true"],
 *      ["148", "160", "9", "5", "3", "true", "true"],
 *      ["149", "60", "11", "1", "1", "false", "true"]
 *    ]
 *
 */

'use strict';

let data = `  "id", "m2", "antigüedad", "habitaciones", "baños", "amueblado", "ascensor"
  142, 88, 12, 3, 1, true,  false
  143, 120, 10,  4, 2, false,  false
  144, 46, 18,  1, 1, true,  true
  145, 52, 8,  1, 1, true,  true  
  146, 60, 3,  1, 1, true,   true
  147, 140, 4,  4, 2, true,   true   
  148, 160, 9,  5, 3, true,  true
  149, 60, 11,  1, 1, false,  true
     `;
data = data.trim().split('\n');
data.shift();

for (let i = 0; i < data.length; i++) {
  data[i] = data[i].replaceAll(' ', '').split(',');
}

console.log(data);

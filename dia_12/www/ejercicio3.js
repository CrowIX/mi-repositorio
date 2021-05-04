/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dada la siguiente API, obtén un array con el nombre de todos los municipios de la
 * provincia de Lugo.
 *
 * Además, el nombre de los municipios debe estar ordenado por orden alfabético inverso.
 *
 * - Resuélvelo con then & catch.
 *
 * - Resuélvelo con async / await.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

'use strict';

fetch('https://www.el-tiempo.net/api/json/v2/municipios')
  .then((response) => response.json())
  .then((data) =>
    console.log(
      data
        .filter((data) => data.CODPROV === '27')
        .map((data) => data.NOMBRE)
        .sort()

        .reverse()
    )
  )
  .catch((error) => console.error(error));

const getMunicipalities = async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const municipios = data
      .filter((data) => data.CODPROV === '27')
      .map((data) => data.NOMBRE);
    return municipios.sort().reverse();
  } catch (error) {
    console.error(error);
  }
};

getMunicipalities('https://www.el-tiempo.net/api/json/v2/municipios')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dada la siguiente API, pide a un usuario un valor en euros y conviértelo a dólares.
 *
 * API: https://www.el-tiempo.net/api
 *
 */

const provinciasSpain = fetch(
  'https://www.el-tiempo.net/api/json/v2/provincias'
)
  .then((response) => response.json())
  .then((response) => response.provincias.map((prov) => prov.NOMBRE_PROVINCIA))
  .catch((error) => console.error(error));

provinciasSpain.then();

fetch('https://www.el-tiempo.net/api/json/v2/provincias')
  .then((response) => response.json())
  .then((response) =>
    console.log(response.provincias.map((prov) => prov.NOMBRE_PROVINCIA))
  )
  .catch((error) => console.error(error));

async function getCharacters() {
  const response = await fetch(
    'https://www.el-tiempo.net/api/json/v2/provincias'
  );
  const data = await response.json();
  return data.provincias.map((prov) => prov.NOMBRE_PROVINCIA);
}

getCharacters().then;

/**
 * ###############################################################
 * ## Obtener un array con las series de las 5 primeras páginas ##
 * ###############################################################
 *
 * API: https://www.episodate.com/api
 *
 */

'use strinct';

const getPageEpisodes = async (limit) => {
  try {
    const series = [];
    for (let i = 1; i <= limit; i++) {
      const response = await fetch(
        `https://www.episodate.com/api/most-popular?page=${i}`
      );
      const data = await response.json();
      series.push(...data.tv_shows);
    }
    return series;
  } catch (error) {
    console.log(error);
  }
};

getPageEpisodes(5)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* const {tv_shows} = await response.json() */ //Esto es destructuring sacamos el objeto tv_shows de la respuesta

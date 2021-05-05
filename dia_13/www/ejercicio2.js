/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Obtener un array con los todos personajes humanos que esten muertos.
 *
 * ¡No utilizar el método filter!
 *
 * API: https://rickandmortyapi.com/
 *
 */

/* fetch('https://rickandmortyapi.com/api/character/?status=Alive&species=Human')
  .then((response) => response.json())
  .then((response) => {
    const array = [];
    array.push(...response.results);
    console.log(array);
  })
  .catch((error) => console.error(error)); */

/* const getCharacters = async (status, species) => {
  try {
    const characters = [];
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}`
    );
    const data = await response.json();
    characters.push(...data.results);
    const characterMap = characters.map((character) => character.name);
    return console.log(characterMap);
  } catch (error) {
    console.error(error);
  }
};

getCharacters('Alive', 'Human'); */

/////////////////////////// MEJORADO ///////////////////////

const getCharacter = async (status = '', species = '') => {
  try {
    const call1 = await fetch(
      `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}`
    );
    const call2 = await call1.json();
    const paginas = call2.info.pages;
    const arrayVacio = [];
    for (let i = 1; i <= paginas; i++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${i}&status=${status}&species=${species}`
      );
      const character = await response.json();
      arrayVacio.push(...character.results);
    }
    /*    const arrayMap = arrayVacio.map((character) => {
      return character.name;
    });
    return console.log(arrayMap); */
    return console.log(arrayVacio);
  } catch (error) {
    console.log(error);
  }
};

getCharacter();

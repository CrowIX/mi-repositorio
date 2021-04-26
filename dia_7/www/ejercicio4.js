/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Crea un programa que compruebe si un string es palíndromo, es decir, que se lee igual
 * del derecho que del revés. Por ejemplo, "Arriba la birra" es un palíndromo.
 *
 */

'use strict';

const myText = 'Arriba la birra';

function palindrome(string) {
  string = string.split('');
  if (string.indexOf(' ') > 0) {
    for (let spaces = 0; spaces <= string.length; spaces++) {
      let spaces = string.indexOf(' ');
      string.splice(spaces, 1);
      if (string.indexOf(' ') === -1) {
        break;
      }
    }
  }
  string = string.join('').toLowerCase();
  let reverseString = string.split('').reverse().join('').toLowerCase();
  if (string === reverseString) {
    return 'El texto es palindromo';
  } else {
    return 'El texto no es palindromo';
  }
}

console.log(palindrome(myText));

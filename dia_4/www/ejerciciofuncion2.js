function daBombGame() {
  alert(
    'Bienvenido usuari@, a continuación debes ayudarme a desactivar la bomba.'
  );

  alert(
    'Para ello, necesito que ingrese un valor del 1 al 10 y si coincide con la bomba, se desactivará, solo tendrás 5 intentos.'
  );

  let defuseNumber = Math.round(Math.random() * 10 + 1);
  console.log(defuseNumber);

  for (let counter = 4; counter >= 0; counter--) {
    let userNumber = Number(prompt('Ingresa un nº del 1 al 10'));
    if (
      userNumber > 10 ||
      userNumber < 1 ||
      userNumber === null ||
      userNumber === null
    ) {
      do {
        userNumber = Number(
          prompt(
            'Has ingresado un nº invalido, por favor recuerda ingresar un nº entre el 1 y el 10'
          )
        );
      } while (
        userNumber > 10 ||
        userNumber < 1 ||
        userNumber === null ||
        userNumber === null
      );
    }
    if (userNumber === defuseNumber) {
      alert('¡Lo has logrado, has desactivado la bomba! FELICITACIONES!');
      break;
    } else if (counter === 0) {
      alert(
        '¡Oh no, la bomba ha explotado!, pero no te sientas mal, siempre puedes volver a intentarlo'
      );
    } else {
      alert(
        `El nº ${userNumber} que has ingresado no es el correcto, te quedan: ${counter} intentos. Deberas ingresar otro nº`
      );
    }
  }
}

daBombGame();

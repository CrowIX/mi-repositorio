function showInfo(name, age) {
  return `Eres ${name} y tienes ${age}`;
}

let nameInput = prompt('Por favor ingresa tu nombre:');
let ageInput = Number(prompt('Por favor ingresa tu edad:'));

console.log(showInfo(nameInput, ageInput));

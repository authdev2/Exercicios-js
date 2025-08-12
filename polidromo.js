// Cria uma função que verifica se uma string é um palíndromo (lê-se igual da frente para trás e de trás para frente,
//     ignorando maiúsculas e espaços).

function Palidromo(string) {
  let defaultString = string.toLowerCase().trim();
  let saveString = "";
  for (let i = defaultString.length - 1; i >= 0; i--) {
    saveString += defaultString[i];
  }

  if (defaultString == saveString) {
    console.log("É palíndromo");
  } else {
    console.log("Não é palíndromo");
  }
}

let string = "joaozim";

Palidromo(string);

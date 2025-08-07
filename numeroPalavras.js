// Cria uma função que recebe uma string e retorna o número de palavras que ela contém.
// Uma palavra é qualquer conjunto de caracteres separado por espaços.

function NumeroPalavras(string) {
  let newSting = string.trim().split(" ");

  return newSting.length;
}

const string = "        Hoje está um dia bonito      ";

console.log(NumeroPalavras(string));

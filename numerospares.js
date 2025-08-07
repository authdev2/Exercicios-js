// Cria uma função que recebe um array de números e retorna a soma de todos os números pares.

function SomaTodos(array) {
  let newArray = array.filter(number => number % 2 === 0);

  let result = newArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return result;
}

let array = [1, 2, 3, 5, 10];

console.log(SomaTodos(array)); 
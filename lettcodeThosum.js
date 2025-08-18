const target = 9;

let array = [1, 2, 2, 4, 7];

function SumNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return `Nunmero ${array[i]} e ${array[j]}`;
      }
    }
  }
}

console.log(SumNumbers(array));

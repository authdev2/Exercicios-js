const num = 100;

for (let i = 1; i <= num; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Numero " + i + " é fizzbuzz");
  } else if (i % 3 == 0) {
    console.log("Numero " + i + " é fizz");
  } else if (i % 5 == 0) {
    console.log("Numero " + i + " é buzz");
  } else {
    console.log("Numero " + i + " não é nada");
  }
}

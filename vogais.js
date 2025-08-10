function CountSatrings(string) {
  let newString = string.toLowerCase();
  let vogais = ["a", "e", "i", "o", "u"];
  let countVogais = 0;

  for (let i = 0; i < newString.length; i++) {
    for (let j = 0; j < vogais.length; j++) {
      if (newString[i] == vogais[j]) {
        console.log(newString[i]);
        console.log(vogais[j]);

        countVogais++;
      }
    }
  }
  return countVogais;
}

console.log(CountSatrings("Flavio"));
function CountSatrings(string) {
  let newString = string.toLowerCase();
  let vogais = ["a", "e", "i", "o", "u"];
  let countVogais = 0;

  for (let i = 0; i < newString.length; i++) {
    console.log(`O meu nome em strings ${newString[i]}`);
    for (let j = 0; j < vogais.length; j++) {
      console.log(`As vogais ${vogais[j]}`);

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
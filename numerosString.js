const frase = "Ola mundao tudo bem";

let objectGuardar = {};

for (let i = 0; i <= frase.length - 1; i++) {
  if (objectGuardar[frase[i]]) {
    objectGuardar[frase[i]] += 1;
  } else {
    objectGuardar[frase[i]] = 1;
  }
}

console.log(objectGuardar);

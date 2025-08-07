// Cria uma função que recebe uma string e remove todos os espaços extras no início, fim e entre as palavras
//  (deixando apenas um espaço entre elas).



function RemoverEspacos(string) {
    return string.trim().replace(/\s+/g, ' ')
}

let string = "Ola     Flavio  tudo   bem?"
console.log(RemoverEspacos(string))

//Escreva um programa em JavaScript para extrair a primeira metade
//  de uma string de comprimento par.

const string = "flaviogomess"

if (string.length % 2 == 0){
    console.log(string.slice(0, string.length -1 / 2))
}else{
    console.log("Essa string não da porque não e par")
}
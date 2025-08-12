//Conte quantas vezes cada palavra aparece numa frase

const frase = "Ola senhor tudo bem , prazer senhor senhor"

const spitFrase = frase.split(" ")
let quantidadePalavras = {}
console.log(spitFrase)

for(let i =0; i<=spitFrase.length -1; i++){
    console.log(spitFrase[i])
    if (!quantidadePalavras[spitFrase[i]]){
        quantidadePalavras[spitFrase[i]] = 1
    }else{
        quantidadePalavras[spitFrase[i]] += 1

    }

}console.log(quantidadePalavras)
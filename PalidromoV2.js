//PALIDROMO E SE UMA PALAVRA AO CONTRARIO FOR IGUAL A ORIGINAL

function ReceberString(string){
    let newString = ""
    for(let i = string.length -1; i>=0; i--){
        newString+= string[i]
    }

    if (string == newString){
        return "É polidromo"
    }else{
        return "Não é polidromo"
    }
}


const string = "ovo"
console.log(ReceberString(string))
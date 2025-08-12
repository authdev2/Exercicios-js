// Crie uma função chamada 'executar' que recebe um callback e um valor, e executa o callback com esse valor.
//function dobrar(n) {
  //return n * 2;
//}
// executar(dobrar, 5) -> 10

function executar(callbac, nome){
    callbac(nome)
}

function dobrar(n) {
  console.log("ola" + n)
}

executar(dobrar, " joao")
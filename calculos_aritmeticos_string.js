// Calculos aritmeticos

/*

Realizando Calculos aritmeticos utilizando como sinal de operação uma string
com o if e o operador relacional == o programa consegue fazer o calculo
 
*/

let nu1 = 100
let nu2 = 200
let operacao = "-"
let resultado;

if(operacao == "*"){
    resultado = nu1 * nu2
} else if(operacao == "+"){
    resultado = nu1 + nu2
} else if(operacao == "-"){
    resultado = nu1 - nu2
} else if(operacao == "/"){
    resultado = nu1 / nu2
}

console.log(`Resultado : ${resultado}`)

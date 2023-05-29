// calculo imc


function calculoIMC() {

    let peso = 63;
    let altura = 1.75;
    let calculoPeso = peso / Math.pow(altura, 2)
    // console.log(calculoPeso.toFixed(2))

    let mensagem;

    if(calculoPeso < 18.5) {
        mensagem = "Peso : Magreza"
    } else if (calculoPeso >= 18.5 && calculoPeso <= 24.9) {
        mensagem = "Peso : Normal"
    } else if (calculoPeso >= 25.0 && calculoPeso <= 29.9) {
        mensagem = "Peso : Sobrepeso"
    } else if (calculoPeso >= 30.0 && calculoPeso <= 39.9) {
        mensagem = "Peso : Obesidade Nivel 1"
    } else {
        mensagem = "Peso : Obesidade Grave"
    }

    console.log(mensagem)

    return mensagem
}

calculoIMC()
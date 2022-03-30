// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

// function divisao(dividendo, divisor) {
//     resultado = dividendo / divisor
//     restante = dividendo % divisor
//     console.log(resultado)
//     console.log(restante)
// }

function divisao(dividendo, divisor) {
    console.log(`resultado: ` + Math.floor(dividendo / divisor))
    console.log(`resto = ${dividendo % divisor}`)
}

divisao(15, 3)

divisao(17, 4)

divisao(33, 4.5)
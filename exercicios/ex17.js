// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumento(plano, salario) {
    let resultado = 0
    switch (plano.toUpperCase()) {
        case "A":
            resultado = salario + (salario * 0.10)
            console.log(resultado)
            break
        case "B":
            resultado = salario + (salario * 0.15)
            console.log(resultado)
            break
        case "C":
            resultado = salario + (salario * 0.20)
            console.log(resultado)
            break
        default:
            console.log("plano invalido")
    }
}

aumento("a", 1000)
aumento("b", 1000)
aumento("C", 1000)
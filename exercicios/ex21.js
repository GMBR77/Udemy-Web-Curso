// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function calcularPlano(idade) {
    let valor = 0
    if (idade < 0) {
        console.log("idade invalida");
    } else if (idade < 10) {
        valor = 100 + 80
        console.log(valor)
    } else if (idade <= 30 ) {
        valor = 100 + 50
        console.log(valor)
    } else if (idade <= 60 ) {
        valor = 100 + 95
        console.log(valor)
    } else if (idade >= 60) {
        valor = 100 + 130
        console.log(valor)
    } else if (idade < 0) {
        console.log("idade invalida");
    }
}   

calcularPlano(8)
calcularPlano(15)
calcularPlano(35)
calcularPlano(60)
calcularPlano(80)
calcularPlano(-19)
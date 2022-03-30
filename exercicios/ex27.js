// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calculaAltura(crianca1, crianca2, taxaDeCrescimenoAnual1, taxaDeCrescimenoAnual2) {
    let maiorCrianca = 0
    let menorCrianca = 0
    let taxaMaiorCrianca = 0
    let taxaMenorCrianca = 0
    let contadorAnos = 0
    let inicialMenorCrianca = 0
    if (crianca1 == crianca2 ) {
        return 
    }
    if (crianca1 > crianca2) {
        maiorCrianca = crianca1
        menorCrianca = crianca2
        inicialMenorCrianca = crianca2
        taxaMenorCrianca = taxaDeCrescimenoAnual2
        taxaMaiorCrianca = taxaDeCrescimenoAnual1
    }  else {
        maiorCrianca = crianca2
        menorCrianca = crianca1
        inicialMenorCrianca = crianca1
        taxaMaiorCrianca = taxaDeCrescimenoAnual2
        taxaMenorCrianca = taxaDeCrescimenoAnual1
    }
    if (taxaMenorCrianca > taxaMaiorCrianca) {
        while (maiorCrianca >= menorCrianca) {
            maiorCrianca += taxaMaiorCrianca
            menorCrianca += taxaMenorCrianca
            contadorAnos++
        }
    }
    return {contadorAnos, inicialMenorCrianca}
}

const qtdAnos = calculaAltura(100, 90, 2 , 4)

if (qtdAnos.contadorAnos > 0) {
    console.log(`a menor criança com altura ${qtdAnos.inicialMenorCrianca} passara a maior em ${qtdAnos.contadorAnos} ano(s)`);
} else {
    console.log("as criancas tem a mesma altura ou a criança menor nao alcancara a  maior");
}

// FUI NO MERCADO












// function calculaAltura(crianca1, crianca2, taxaDeCrescimenoAnual1, taxaDeCrescimenoAnual2) {
//         let maiorCrianca = quemMaior(crianca1, crianca2, taxaDeCrescimenoAnual1, taxaDeCrescimenoAnual2)
//         let menorCrianca = quemMaior(crianca1, crianca2, taxaDeCrescimenoAnual1, taxaDeCrescimenoAnual2)
//         let taxaMaiorCrianca = 0
//         let taxaMenorCrianca = 0
//         let contadorAnos = 0
//         if (taxaMenorCrianca > taxaMaiorCrianca) {
//             while (maiorCrianca >= menorCrianca) {
//                 menorCrianca = menorCrianca + (menorCrianca + taxaMenorCrianca)
//                 maiorCrianca = maiorCrianca + (maiorCrianca + taxaMaiorCrianca)
//                 contadorAnos++
//         }
//         console.log(`a criana menor passara a maior em ${contadorAnos} anos`)
//         } else {
//             console.log("a menor crianca nao ultrapassara a maior crianca");
//         }
// }
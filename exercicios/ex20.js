// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function sacarDinheiro(valor) {
        let contador100 = 0
        let contador50 = 0
        let contador10 = 0
        let contador5 = 0
        let contador1 = 0
        let resultado = 0

        if (valor / 100 >= 1) {
                resultado = Math.floor(valor / 100)
                contador100 += resultado
                valor = valor % 100
                console.log(`${contador100} nota(s) de R$ 100.`);
        }
        
        if (valor / 50 >= 1) {
                resultado = parseInt(valor / 50)
                contador50 += resultado
                valor = valor % 50
                console.log(`${contador50} nota(s) de R$ 50.`);
        }
        
        if (valor / 10 >= 1) {
                resultado = parseInt(valor / 10)
                contador10 += resultado
                valor = valor % 10
                console.log(`${contador10} nota(s) de R$ 10.`);
        }
        
        if (valor / 5 >= 1) {
                resultado = parseInt(valor / 5)
                contador5 += resultado
                valor = valor % 5
                console.log(`${contador5} nota(s) de R$ 5.`);
        }
        
        if (valor >= 1) {
                resultado = parseInt(valor)
                contador1 += resultado
                valor = valor
                console.log(`${contador1} nota(s) de R$ 1.`);
        }
}


sacarDinheiro(326)

/* 555
se 550 / 100 > 1 
resultado = 5

*/
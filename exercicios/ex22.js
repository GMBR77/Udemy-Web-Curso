// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
/*

*/

function jurosComposto(mes, valor) {
    let composto = valor * ((1 + (5/100))** mes)    
    console.log(`valor a ser pago ${composto.toLocaleString(`pt-BR`, {style: 'currency', currency:'BRL'})}`)
}
function calcularAnuidade (mes, valor) {
    let valorTotal = 0
    if (mes == 1) {
        console.log(`valor a ser pago ${valor.toLocaleString(`pt-BR`, {style: 'currency', currency:'BRL'})}`)
    } else if (mes > 1 && mes <= 12) {
        valorTotal = jurosComposto(mes, valor)
    } else {
        console.log("mes invalido");
    }
}


calcularAnuidade(1, 1200)
calcularAnuidade(3, 1200)
calcularAnuidade(7, 1200)
// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imparesEntre(inicio, fim) {
    if (inicio > fim) {
    let temp = inicio;
    inicio = fim;
    fim = temp;
  }
    let count = inicio
    while (count < fim) {
        count++
        if(count % 2 == 1) {
            console.log(count)
        }
        if(count == fim) {
            console.log("Fim");
        }
    }
}

imparesEntre(0, 12)

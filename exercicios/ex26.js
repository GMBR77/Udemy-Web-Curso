// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function encontrarPares() {
    let numeroInicial = 1
    while (numeroInicial <= 100) {
        if (numeroInicial % 2 == 0) {
            console.log(numeroInicial);
            numeroInicial++
        } else {
            numeroInicial++
        }
    }
}
encontrarPares()
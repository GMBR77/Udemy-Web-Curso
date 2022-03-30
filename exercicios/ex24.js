// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function imprimirNaTela(vezes) {
    while (vezes >= 1) {
        console.log("Hello World")
        --vezes
    }
}

imprimirNaTela(11)
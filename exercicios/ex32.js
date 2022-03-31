// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

vetorInts = [10, 20, 10, 20]

function somar() {
    let soma = 0
    for (let i in vetorInts) {
        soma += vetorInts[i]
    }
    return soma
}

let media = (somar(vetorInts) / vetorInts.length).toFixed(2)


console.log(media)
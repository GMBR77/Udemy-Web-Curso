// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.


const VetorInts  = [6, 7, 8, 1, 2, 3, 10, 20, 13, 15, 16, 13, 14, 31]

function separador () {
    let maior = VetorInts[0]
    let menor = VetorInts[0]
    for (let i in VetorInts) {
        if (VetorInts[i] > maior )  {
            maior = VetorInts[i]
        } else if (VetorInts[i] < menor) {
            menor = VetorInts[i]
        }
    }return {maior, menor}
}

console.log(separador(VetorInts))
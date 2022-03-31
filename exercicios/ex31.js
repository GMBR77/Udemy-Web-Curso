// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

let VetorInts = [10, 2, -1, -3, 5, -19, 45, 52, -3, 5, 1, -6]


const numsNegativo = VetorInts.filter(num => num < 0)

console.log(numsNegativo)


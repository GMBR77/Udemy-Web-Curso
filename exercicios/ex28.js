// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const vetorNumsInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = vetorNumsInt.filter(vetorNumsInt => vetorNumsInt % 2 == 0)
const impares = vetorNumsInt.filter(vetorNumsInt => vetorNumsInt % 2 != 0)
console.log(pares)
console.log(impares);

// function parOuImpar () {
//     let pares =  []
//     let impares = []
//     for (const num in vetorNumsInt) {
//         console.log(num)
//         // console.log(vetorNumsInt);
//         if ( num % 2 == 0) {
//             pares.push(num)
//             // console.log(num);
//         } else {
//             impares.push(num)
//             // console.log(num);
//         }
//     }
//     return {pares, impares}
// }
// const resultado = parOuImpar(vetorNumsInt)

// console.log(resultado.pares);
// console.log(impares);
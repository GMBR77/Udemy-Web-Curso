// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

vetorNumerico = [1, 2, 3, 4];
numInteiro = 2;


function funcao1(vetorNumerico, numeroInteiro) {
  let respForEach = vetorNumerico.map((num) => {
    let resp = num * numeroInteiro;
    return resp;
  });
  return respForEach;
}

// function funcao1 (vetorNumerico, numInteiro) {
//     let resultado = []
//     for(let i in vetorNumerico) {
//         // console.log(i);
//         resultado.push(vetorNumerico[i] * numInteiro)
//     }
//     return resultado
// }

console.log(funcao1(vetorNumerico, numInteiro));

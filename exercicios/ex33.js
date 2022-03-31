// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.


const vetorInteiro = [10, 20]
const vetorString = ['a','b']
const vetorDouble = [1.5, 2.5]

const vetorResultado = vetorInteiro.concat(vetorString, vetorDouble)

console.log(vetorResultado);
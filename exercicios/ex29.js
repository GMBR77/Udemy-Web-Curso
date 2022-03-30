// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

const vetorNums = [5, 10, 15, 17, 20, 25, 30]

function exec() {
    let qtdDentro = 0
    let qtdFora = 0
    for (let i in vetorNums) {
        if (vetorNums[i] >= 10 && vetorNums[i] <= 20) {
            qtdDentro++
        } else {
            qtdFora++
        }
    }
    return { qtdDentro, qtdFora }
}
console.log(exec(vetorNums));
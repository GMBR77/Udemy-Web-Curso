// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// filtrarNumeros(["a", "c"]) // retornará []

const meuArray = ['elemento 1', 2, 'madagascar', 5, 'Pog']

function filtrarNumeros() {
    const resultado = meuArray.filter(function(e) {
        return typeof e === 'number'
    })
    return resultado
}

console.log(filtrarNumeros(meuArray));
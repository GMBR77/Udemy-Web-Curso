// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60


const meuArray = [10,10,10]
function somarNumeros(meuArray) {
    return meuArray.reduce((acumulador, atual) => acumulador + atual)
}

console.log(somarNumeros(meuArray));
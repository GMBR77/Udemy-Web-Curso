// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

const meuArray = [1, 2, 3, 4, 5,39]

function primeiroUltimo () {
    const primeiro = meuArray.shift()
    const ultimo = meuArray.pop()
    return [primeiro, ultimo]
}

console.log(primeiroUltimo());
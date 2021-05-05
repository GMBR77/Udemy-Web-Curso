function criarProd(nome,preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProd('lasanha', 20))
console.log(criarProd('queijo ralado', 5))
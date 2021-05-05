function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 1

do {
    opcao = getInteiroAleatorioEntre(0, 10)
        console.log(`o numero escolhido foi ${opcao}`)
} while (opcao != 1)

console.log('Game Over')
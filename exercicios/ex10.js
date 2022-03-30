// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function divisivelPor3(valor) {
    if (valor % 3 == 0) {
        console.log(`valor divisivel por 3 resultado: ${valor / 3}`)
    } else {
        console.log(`valor nao divisivel por 3 resultado: ${valor / 3}`)
    }
}

divisivelPor3(333)
divisivelPor3(209)
// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
// Exemplos:



function simboloMais(repeticao) {
    let objetoX = ""

    for (i = 1; i <= repeticao; i++)  {
        objetoX += "+"
    }
    return objetoX
}










console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4))
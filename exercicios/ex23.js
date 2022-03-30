// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calcularNota (codigoAluno, nota1, nota2, nota3) {
    let media = ((nota1 * 4) + ((nota2 + nota3) * 3 )) /10
    if (media >= 5) {
        console.log(`O aluno ${codigoAluno} com notas ${nota1}, ${nota2}, ${nota3} e media ${media.toFixed(1)} foi Aprovado.`)
    }
    if (codigoAluno < 0) {
        console.log("Codigo invalido.");
    }
    else if (media <= 5) {
        console.log(`O aluno ${codigoAluno} com notas ${nota1}, ${nota2}, ${nota3} e media ${media.toFixed(1)} foi Reprovado.`)
    }
}



calcularNota(1,10,10,10)
calcularNota(1,10,10,4)
calcularNota(10, 5.2, 3, 5)
calcularNota(-1, 5.2, 3, 5)
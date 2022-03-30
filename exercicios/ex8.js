// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

// -------------------------------------------------------------------------------------------------------------------------
// 1a separar os valores dentro da string
// 2 converter os valores dentro da strings em numeros
// 3 comparar cada numero com seu predecessor e separar quando o numero for ultrapassado
// 4 ver qual o menor numero e guardar sua posiçao(lembrando que deve sempre guardar o ultimo numero se tiverem iguais) 


let stringPontos = "10 20 20 8 25 3 0 30 1"

function progressao (stringPontos) {
    let separarString = stringPontos.split(" ")
    let quebraRecorde = 0
    let piorJogo = 1
    let maiorPontuacao = separarString[0]
    let menorPontuacao = separarString[0]

    for (let i = 1; i < separarString.length; i++) {
        if (separarString[i] > maiorPontuacao) {
            maiorPontuacao = separarString[i]
            quebraRecorde++
        } else if (separarString[i] < menorPontuacao){
            menorPontuacao = separarString[i]
            piorJogo = i+1;
        }
    }
    return [quebraRecorde, piorJogo]
}

console.log(progressao(stringPontos))
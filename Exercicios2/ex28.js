/*Crie uma função que recebe um array de números e retorna o segundo maior número presente
 nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
 */


meuArray = [12, 126, 111, 5, 155]

function segundoMaior(array) {
    // console.log(array.length);
    return array.sort((a, b) => a - b)[array.length - 2];
}

// function segundoMaior(numeros) {
//     const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
//     console.log(numerosOrdenados);
//     const segundoMaior = numerosOrdenados[1]
//     return segundoMaior
//     }
    

console.log(segundoMaior(meuArray));
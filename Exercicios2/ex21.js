// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
// sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
// não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
// Exemplos:
// funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
// funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
// funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"


function funcaoDaSorte(num) {
    
    let random = function getRandomIntInclusive(min, max) {
        min = Math.ceil(1);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    let numRand = random()
    if (num === numRand) {
        return `Parabéns! O número sorteado foi o ${numRand} e escolhido ${num}`
    } else {
        return `Que pena! O número sorteado foi o ${numRand} e escolhido ${num}`
    }
}

console.log(funcaoDaSorte(7));
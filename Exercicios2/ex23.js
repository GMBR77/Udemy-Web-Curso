// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.
// Exemplos:
// contarCaractere("r", "A sorte favorece os audazes") // retornará 2
// contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1


const minhaFrase = 'Nothing is true, Everything is permited.'
const minhaFrase2 = 'Conhece-te a ti mesmo'



function contarCaractere (char, frase) {
    let separarCaracteres = frase.split("")
    // console.log(separarCaracteres);
    let contadorCharIguais = 0
    separarCaracteres.filter(function(e) {
        if (e == char) {
            return contadorCharIguais++
        }
    })
    console.log(contadorCharIguais);
}

contarCaractere("c", minhaFrase2)
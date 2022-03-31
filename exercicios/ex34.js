// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

let frase1 = 'cba'
let frase2 = 'abc'

function verificarString (frase1, frase2) {
    let estaContido = true
    for (let i = 0; i < frase1.length; i++) {
        let caracteresFrase1 = frase1.charAt(i).toUpperCase()
        for(let j = 0; j < frase2.length; j++ ) {
            let caracteresFrase2  = frase2.charAt(j).toUpperCase()
            if (caracteresFrase1 == caracteresFrase2) {
                estaContido = true
            } else {
                estaContido = false
            }
        }
        return estaContido
    }
    return estaContido
}

console.log(verificarString('abc','cab'))

// function estaEntre(numero, minimo, maximo, inclusivo) {
//     const inclusivo = Boolean


// }

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }
    
console.log(estaEntre(10, 100, 50)) // retornarĂ¡ true
console.log(estaEntre(16, 100, 160)) // retornarĂ¡ false
console.log(estaEntre(3, 150, 3)) // retornarĂ¡ false
console.log(estaEntre(3, 150, 3, true)) // retornarĂ¡ true

// function estaEntre(numero, minimo, maximo, inclusivo) {
//     const inclusivo = Boolean


// }

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }
    
console.log(estaEntre(10, 100, 50)) // retornará true
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true)) // retornará true
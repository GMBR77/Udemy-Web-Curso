// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.
// Exemplos:

// function repetir(elemento, repeticao) {
//     let arrayElemento = []
//     for (i = 1; i <= repeticao; i++){
//     arrayElemento.push(elemento)
//     }
//     console.log(arrayElemento)
// }

function repetir(elemento, repeticao){
    let arrayElemento = []
    if (repeticao == 0) {
        return elemento    
    } else {
        arrayElemento.push(elemento) 
        arrayElemento.push(...repetir(elemento, repeticao-1))
        return arrayElemento
    }
}



console.log(repetir("código", 7)) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

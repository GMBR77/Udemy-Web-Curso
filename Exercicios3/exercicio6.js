
function inverso(numero) {
    const tipo = typeof numero

    if (tipo == "boolean") {
        return !numero
    } 

    if (tipo == "number") {
        return -numero
    } 
    else {
        return `o parametro inserido foi ${tipo}`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(3000))
console.log(inverso(-3000))
console.log(inverso("aaaaaaaaaaaaaaaa"))
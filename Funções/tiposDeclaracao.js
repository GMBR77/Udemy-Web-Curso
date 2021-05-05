// function declaration pode ser chamada antes mesmo da linha da funcao
function soma(x, y) {
    return x + y
}

// function expression nao pode ser chamadao antes da linha da funcao
const sub = function(x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}
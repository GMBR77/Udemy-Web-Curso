// crie uma funcao que receba dois numeros e retorne se o primeiro e maior ou igual ao segundo

function MaiorOuIgual(num1, num2) {
    if (num1 >= num2) {
        return true
    }
    if (num1 !== Number || num2 !== Number) {
        return false
    }
    if (num1 < num2) {
        return false
    }
}

console.log(MaiorOuIgual(1,1))
console.log(MaiorOuIgual(3,1))
console.log(MaiorOuIgual(1,"a"))
console.log(MaiorOuIgual(1,"3"))
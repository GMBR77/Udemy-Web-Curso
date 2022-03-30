// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 & lado2 == lado3) {
        console.log(`o triangulo é Equilatero ${lado1}, ${lado2}, ${lado3}`)
    }
    else if (lado1 !== lado2 & lado2 !== lado3 & lado1 !== lado3) {
        console.log(`o triangulo é Escaleno ${lado1}, ${lado2}, ${lado3}`)
    } else {
        console.log(`o triangulo é Isosceles ${lado1}, ${lado2}, ${lado3}`)
    }
}


tipoTriangulo(3, 3, 3)
tipoTriangulo(4, 3, 3)
tipoTriangulo(3, 4, 3)
tipoTriangulo(3, 3, 4)
tipoTriangulo(3, 4, 5)
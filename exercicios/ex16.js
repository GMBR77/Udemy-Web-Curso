// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
// Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.


function calculadora(numero1, operação, numero2) {
    let resultado = 0
    switch (operação) {
        case "+":
            resultado = numero1 + numero2
            console.log(resultado)
            break
        case "-":
            resultado = numero1 - numero2
            console.log(resultado)
            break
        case "*":
            resultado = numero1 * numero2
            console.log(resultado)
            break
        case "/":
            resultado = numero1 / numero2
            console.log(resultado.toFixed(2))
            break
        default:
            console.log("operaçao invalida!")
            break
    }
}

calculadora(2, "+", 3)
calculadora(2, "-", 3)
calculadora(2, "*", 3)
calculadora(2, "/", 3)
calculadora(2, "**", 3)

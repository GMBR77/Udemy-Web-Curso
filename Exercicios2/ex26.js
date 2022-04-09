// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:
// Exemplo:
// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"


function inverterChaveValor(objeto) {
    let objetoInvertido = {}
    let arrayChaveValor = Object.entries(objeto)
    let arrayKeys = Object.keys(objeto)
    for (i = 0; i < arrayKeys.length; i++) {
        objetoInvertido[objeto[arrayKeys[i]]] = arrayKeys[i]
    }
    console.log(objetoInvertido);

}

inverterChaveValor({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6})

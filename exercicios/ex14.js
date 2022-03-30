// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

let nome = ""
function fruta(nome) {
    switch(nome.toLowerCase()) {
        case "maça":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("estamos com ecassez de kiwis")
            break
        case "melancia":
            console.log("aqui esta, 3 dol o quilo")
            break
        default:
            console.log("erro!")
    }
}

fruta("kiwi")
fruta("kiWi")
fruta("melancia")
fruta("mAçA")
fruta("abobora")
// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function calculaAnoBissexto(ano) {
    let ebisexto = "substitui e fodace"
    if (ano >= 1){
        if (ano % 400 == 0) {
            ebisexto = true
        } else if (ano % 100 == 0){
            ebisexto = false
        } else if (ano % 4 == 0) {
            ebisexto = true
        } else {
            ebisexto = false
        }
        // console.log(`o ano ${ano} é bisexto? ${ebisexto}`)
        // return ebisexto
    } else {
        // console.log("ano invalido!")
    }
}
const anoBisexto = calculaAnoBissexto(2022)
console.log(anoBisexto)
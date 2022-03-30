// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function montante(capital, taxaMes, tempoMes) {
    function jurosSimples(capital, taxaMes, tempoMes) {
        let simples = capital + (capital * (taxaMes / 100) * tempoMes)
        console.log(`montante simples ${simples.toLocaleString(`pt-BR`, {style: 'currency', currency:'BRL'})}`)
    }
    function jurosComposto(capital, taxaMes, tempoMes) {
        let composto = capital * ((1 + (taxaMes/100))** tempoMes)    
        console.log(`montante composto ${composto.toLocaleString(`pt-BR`, {style: 'currency', currency:'BRL'})}`)
    }
}   
    
// jurosSimples(1700, 2, 10)
// jurosComposto(1700, 2, 10)
montante(1700, 2, 10)
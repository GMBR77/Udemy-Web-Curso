const urlFuncionarios = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(urlFuncionarios).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios);
    // console.log(typeof funcionarios); (fala que é objeto mas é um array, um array é um objeto??)
    // decobrir mulher chinesa com menor salario
    const mulheresChinesas = funcionarios.filter((f) => f.pais === 'China').filter((f) => f.genero === 'F')
    // console.log(mulheresChinesas);
    const menorSalario = mulheresChinesas.reduce(function (func, funcAtual) {
        return func.salario < funcAtual.salario ? func : funcAtual 
    })
    console.log(menorSalario);
})



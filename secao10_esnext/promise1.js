// promise so opera com 1 unico valor
// para mais valores vc pode usar um objeto ou array


const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve, reject) {
    // resolve({
    //     x: 3,
    //     y: 4
    // })
    resolve(['Ana', 'Bia', 'Carlos', "Daniel"])
})

p.then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
console.log(module.exports);
console.log(this === module.exports);
console.log(exports === module.exports);

this.a = 1 // apenas variaveis
exports.b = 2 // apenas variaveis
module.exports.c = 3 // objeto  

exports = null

console.log(module.exports);

exports = {
    nome: 'Teste'
}

console.log(module.exports);

module.exports = {
    publico: true
}
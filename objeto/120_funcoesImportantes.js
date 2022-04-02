const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));   // funcao.protype(chaves)(objeto) 
console.log(Object.values(pessoa)); // funcao.protype(valores)(objeto)
console.log(Object.entries(pessoa)); // funcao.protype(chave e valor)(objeto) 
// função Object retorna um array

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', { //defineProperty seta parametros com mais controle
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // o primeiro parametro sera o destina e os proximos serao adicionados ao mesmo

Object.freeze(obj)
obj.c = 1234
console.log(obj);
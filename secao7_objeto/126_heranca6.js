function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
// console.log(aula1, aula2);

// simulando o new  (nao funciona )
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    // f.prototype = obj.__proto__
    console.log(f.prototype, obj.__proto__);
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'secao 3' , 789)
console.log(aula3);
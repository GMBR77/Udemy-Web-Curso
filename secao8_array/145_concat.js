const filhas = ['Lara', 'Dio']
const filhos = ['Jack', 'White']
const todos = filhos.concat(filhas, 'segundo argumento adiciona elemento')
console.log(todos);

console.log([].concat([1,2,], [3,4,],5, [[6,7]]));
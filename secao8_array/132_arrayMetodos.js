const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen') // adiciona um novo elemento na ultima posição
console.log(pilotos);

pilotos.shift() // remove o primeito elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição
console.log(pilotos);

// splice pode adicionar e remover elementos na posição indicada

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // retorna um novo array apartir do indice indicado
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // retorna um novo array dentro do intervalo desconsiderando o ultimo indice
console.log(algunsPilotos2);
const tecnologias = new Map()
 tecnologias.set('react', { framework: false})
 tecnologias.set('angular', { framework: true})

 console.log(tecnologias.react);
 console.log(tecnologias.get('react').framework);

 const chavesVariadas = new Map([
     [function () {}, 'Função'],
     [{}, 'Objeto'],
     [123, 'Número'],
 ])

 chavesVariadas.forEach((vl, ch) => {
     console.log(ch, vl);
 });

 console.log(chavesVariadas.has(123));   // .has verificar se o valor esta contido no map
 chavesVariadas.delete(123)
 console.log(chavesVariadas.has(123));
 console.log(chavesVariadas.size);      // mostra a quantidade de valores no map

 chavesVariadas.set(123, 'a')   // seta chave e valor no map, chave tem que ser unica igual a um objeto comum
 chavesVariadas.set(123, 'b')
 chavesVariadas.set(456, 'b')
console.log(chavesVariadas);
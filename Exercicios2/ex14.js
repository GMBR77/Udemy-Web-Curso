// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

// Exemplos:
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]

meuArray = [10, 70, 22, 43];

function receberSomenteOsParesDeIndicesPares(array) {
  return array.filter(function parComPar(elemento, indice) {
    const numeroPar = elemento % 2 === 0;
    const indicePar = indice % 2 === 0;
    return numeroPar && indicePar;
  });
}

console.log(receberSomenteOsParesDeIndicesPares(meuArray));

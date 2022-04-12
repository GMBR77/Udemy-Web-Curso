function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1) + min);
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = [];
        for (let _ of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros));
        // await gerarNumerosEntre (1, 60, numeros)
    }
    return numeros;
       
    } catch(e) {
        if(tentativas > 1000022222) {
            throw "Que Chato!!!"
        } else {
            console.log(tentativas);
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

// gerarNumerosEntre(1,5, [1, 2, 4])
//     .then(console.log())
//     .catch(console.log())

gerarMegaSena(54)
    .then(console.log)
    .catch(console.log);

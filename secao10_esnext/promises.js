// promise é usada quando vc quer algum tipo de processamento assincrono
// promise aceita um unico parametro

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Que legal!")
  .then((frase) => frase.concat("?!?")) //------------> opera em cima do resolve
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e)); //---------------------> tratamento de erro / opera em cima do reject

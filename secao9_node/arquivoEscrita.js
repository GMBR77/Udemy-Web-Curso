const fs = require('fs')

const prod = {
    name: 'Celular',
    preco: 2199.90 ,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(prod), err => {
    console.log(err || 'Arquivo Salvo!');
})
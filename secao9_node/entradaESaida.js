const anonimo = process.argv.indexOf('-a') !== -1 // argumento de execucao especial?
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // acontece quando é pressionado enter
        const nome = data.toString().replace(/[\n\r]/g, '')

        process.stdout.write(`Fala ${nome}!!\n`) // saida padrao == console 
        process.exit() // saida do programa
    })
}
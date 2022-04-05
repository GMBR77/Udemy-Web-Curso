const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Segul',
        nota: 7.3
    }]
}]

const getNotasAluno = aluno => aluno.nota
console.log(getNotasAluno);
const getNotasDaTurma = turma => turma.alunos.map(getNotasAluno)
console.log(getNotasDaTurma);
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);

// const tdsNotas = notas1[0].concat(notas1[1])
// console.log(tdsNotas);

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);
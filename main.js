let alunos = [
    { nome: "Alice", nota: 8 },
    { nome: "Bob", nota: 4 },
    { nome: "Carol", nota: 5 },
    { nome: "Daniel", nota: 7 },
    { nome: "Eva", nota: 10 }
  ];

  function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
  }

  function alunosReprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota < 6);
  }

const alunosAprovadosArray = alunosAprovados(alunos);
const alunosReprovadosArray = alunosReprovados(alunos);
console.log('alunos aprovados:');
console.log(alunosAprovadosArray);
console.log('alunos Reprovados:');
console.log(alunosReprovadosArray);
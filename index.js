// Base a ser utilizada
const alunosDaEscola= [
  {
    nome:"Henrique",
    notas:[],
    cursos:[],
    faltas:5
  },
  {
    nome:"Edson",
    notas:[],
    cursos:[],
    faltas:2
  },
  {
    nome:"Bruno",
    notas:[10,9.8,9.6],
    cursos:[],
    faltas:0
  },
  {
    nome:"Guilherme",
    notas:[10,9.8,9.6],
    cursos:[
      {
        nomeDoCurso:"Full Stack",
        dataMatricula:new Date
      }
    ],
    faltas:0
  },
  {
    nome:"Carlos",
    notas:[],
    cursos:[],
    faltas:0
  },
  {
    nome:"Lucca",
    notas:[10,9.8,9.6],
    cursos:[
      {
        nomeDoCurso:"UX",
        dataMatricula:new Date
      }
    ],
    faltas:0
  }
];


// implementação

/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
function adicionarAluno(nome){
  let aluno = {nome};
  alunosDaEscola.push(aluno);
  console.log(`O aluno ${nome} foi adicionado.`);
}
 
/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
function listarAlunos(){
  for (aluno of alunosDaEscola) {
      console.log(`Nome: ${aluno.nome}`);
      (aluno.notas != '') ? console.log(`Notas: ${aluno.notas}`) : console.log('Notas: Nenhuma nota cadastrada.');
      if(aluno.cursos != '') {
        for(curso of aluno.cursos){
          let d = curso.dataMatricula;
          console.log(`Curso: ${curso.nomeDoCurso}, Matricula: ${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()}`);
        }
      } else {
        console.log('Cursos: Nenhum curso cadastrado.');
      }
      console.log(`Faltas: ${aluno.faltas}`);
      console.log(`-----------------------------------------`);
  };
}; 

/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. 
E deverá devolver um aluno em seu retorno. */
function buscarAluno(nome){
  let aluno = alunosDaEscola.filter( (value) => {
    if(value.nome == nome){
      return value;
    }
  });
  if(aluno != ''){
    console.log('Foi encontrado um aluno com este nome no sistema.');
  } else {
    console.log('Não existe aluno com este nome no sistema.')
  }
  return aluno;
};

/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a 
data atual no momento da matricula
Lembre-se de exibir o feedback para o usuário. */
function matricularAluno(aluno, curso){
  let alunoAtual = buscarAluno(aluno.nome)[0];
  if(alunoAtual != undefined){
    alunoAtual.cursos.push(
      {
        nomeDoCurso: curso,
        dataMatricula: new Date
      }
    )
    console.log(`O aluno ${aluno.nome} foi cadastrado no curso de ${curso}`);
    return alunoAtual;
  } else {
    return false;
  }
};

/*
 Ao receber um aluno devidamente cadastrado em nossa lista. 
 Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. 
 Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
*/
function aplicarFalta(aluno){
  let alunoAtual = buscarAluno(aluno.nome)[0];
  if(alunoAtual != undefined){
    if(alunoAtual.cursos != ''){
      alunoAtual.faltas += 1;
      console.log(`Foi acrescentado uma falta ao aluno ${aluno.nome}`);
      return alunoAtual;
    } else {
      console.log(`O ${aluno.nome} não está matriculado.`);
    }
  } else {
    console.log(`O ${aluno.nome} não está cadastrado no sistema.`)
    return false;
  }
};

/*
 Ao receber um aluno devidamente cadastrado em nossa lista. 
 Você deverá adicionar uma nota ao aluno na sua lista de notas. 
 Você deverá dar um feedback ao concluir a tarefa. 
 Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/
function aplicarNota(aluno,nota){
  let alunoAtual = buscarAluno(aluno.nome)[0];
  if(alunoAtual != undefined){
    if(alunoAtual.cursos != ''){
      alunoAtual.notas.push(nota);
      console.log(`Foi adicionado a nota ${nota} ao aluno ${aluno.nome}`);
      return alunoAtual;
    } else {
      console.log(`O ${aluno.nome} não está matriculado.`);
    }
  } else {
    console.log(`O ${aluno.nome} não está cadastrado no sistema.`)
    return false;
  }
}

/* 
Ao receber um aluno devidamente cadastrado em nossa lista, 
deverá dizer se o mesmo está aprovado ou não. 
Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/
function aprovarAluno(aluno){
  let alunoAtual = buscarAluno(aluno.nome)[0];
  if(alunoAtual != undefined){
    if(alunoAtual.cursos != ''){
      let media = (alunoAtual.notas.reduce((acumulador, valor) => {
        return acumulador + valor
      }, 0) / alunoAtual.notas.length);
      let faltas = alunoAtual.faltas;
      if(media >= 7 && faltas <= 3){
        console.log(`O aluno ${aluno.nome} está aprovado`);
        return alunoAtual;
      } else {
        console.log(`O aluno ${aluno.nome} está reprovado`);
        return alunoAtual;
      }
    } else {
      console.log(`O ${aluno.nome} não está matriculado.`);
    }
  } else {
    console.log(`O ${aluno.nome} não está cadastrado no sistema.`)
    return false;
  }
}
console.log(aprovarAluno({nome: 'Guilherme'}));
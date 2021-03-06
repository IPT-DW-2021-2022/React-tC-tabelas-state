/**
 * App.js
 */

import React from "react";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

class App extends React.Component {

  // este tipo de dados permitem a sua edição
  // ie, pode-se adicionar, ou retirar, elementos
  // em 'real time' ao array
  state = {
    alunos: [
      {
        nome: "João",
        apelido: "Sousa",
      },
      {
        nome: "Ana",
        apelido: "Pires",
      },
      {
        nome: "Mário",
        apelido: "Silva",
      },
      {
        nome: "Luís",
        apelido: "Sousa",
      },
    ]
  }

  /**
   * função para retirar o aluno identificado na <Tabela />
   * da lista de dados armazendos no state
   * @param {*} aluno : aluno a retirar
   */
  removeAluno = (aluno) => {
    // recuperar o acesso aos dados do state
    const { alunos } = this.state

    // retirar o 'aluno' ao array 'alunos'
    // alunos=alunos-aluno
    this.setState({
      alunos: alunos.filter((a, i) => { return i !== aluno })
    })
  }

  /**
   * função para acrescentar ao state um novo aluno,
   * cujos dados foram recolhidos pelo <Formulário />
   * @param {func} aluno : aluno a adicionar
   */
  adicionaAluno = (aluno) => {
    this.setState({ alunos: [...this.state.alunos, aluno] })
  }

  render() {
    // atribuir à variábel interna 'alunos' o conteúdo do 'state' com o mesmo nome
    const { alunos } = this.state // <=>  const alunos = this.state.alunos

    return (
      <div className="container">
        <h1>Alunos</h1>

        <h4>Novo aluno</h4>
        <Formulario novoAlunoOUT={this.adicionaAluno} />
        
        <br /><br />
        <h4>Lista dos alunos</h4>
        <Tabela dadosAlunosIN={alunos} alunoOUT={this.removeAluno} />
      </div>
    )
  }

}

export default App;

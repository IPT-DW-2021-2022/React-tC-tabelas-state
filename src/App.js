/**
 * App.js
 */

import React from "react";
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



  render() {
    // atribuir à variábel interna 'alunos' o conteúdo do 'state' com o mesmo nome
    const { alunos } = this.state // <=>  const alunos = this.state.alunos

    return (
      <div className="container">
        <h1>Lista dos alunos</h1>
        <Tabela dadosAlunosIN={alunos} />
      </div>
    )
  }

}

export default App;

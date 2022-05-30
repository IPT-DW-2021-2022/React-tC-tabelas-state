/**
 * Formulario.js
 * 
 * Componente responsável por recolher os dados de um novo aluno
 */

import React from "react";

class Formulario extends React.Component {

    novoAluno = {
        nome: "",
        apelido: "",
    }

    state = novoAluno

    handlerAdicao = (evento) => {
        const { name, value } = evento.target
        this.setState({ [name]: value })
    }

    render() {
        const { nome, apelido } = this.state
        return (
            <form>
                <div className="input-group">
                    <span className="input-group-text">
                        Dados a introduzir</span>
                    <input type="text"
                        className="form-control"
                        name="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={this.handlerAdicao}
                    />
                    <input type="text"
                        className="form-control"
                        name="apelido"
                        placeholder="Apelido"
                        value={apelido}
                        onChange={this.handlerAdicao}
                    />
                    <input type="submit"
                        className="btn btn-primary"
                        value="Adicionar" />
                </div>
            </form>
        )
    }
}

export default Formulario
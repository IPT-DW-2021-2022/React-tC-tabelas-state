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
    };

    state = this.novoAluno;

    /**
     * handler para processar os dados inseridos nas 'textboxs'
     * @param {*} evento : o valor escrito na textbox
     */
    handlerAdicao = (evento) => {
        const { name, value } = evento.target
        this.setState({ [name]: value })
    }

    /**
     * handler para entregar os dados recolhidos pelo formulário
     * à componente que invocou o <Formulario />
     */
    submitForm = () => {
        this.props.novoAlunoOUT(this.state);
        this.setState(this.novoAluno);
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
                    <input type="button"
                        className="btn btn-primary"
                        value="Adicionar"
                        onClick={this.submitForm} />
                </div>
            </form>
        )
    }
}

export default Formulario
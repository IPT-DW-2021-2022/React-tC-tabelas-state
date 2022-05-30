/**
 * Tabela.js
 */

import React, { Component } from "react";

function Cabecalho() {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th></th>
            </tr>
        </thead>
    )
}

const Corpo = (props) => {
    // iterar todos os elementos do JSON
    // e gerar as linhas da tabela
    const rows = props.dadosRecebidosAlunosIN.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.apelido}</td>
                <td><button className="btn btn-outline-danger"
                    onClick={() => props.alunoARemover(index)}
                >Remover</button></td>
            </tr>
        )
    })


    return (
        <tbody> {rows} </tbody>
    )
}


class Tabela extends Component {
    render() {
        // ler os dados que são envidados
        // para dentro da componente
        // const dadosAlunosIN=this.props.dadosAlunosIN
        const { dadosAlunosIN, alunoOUT } = this.props


        return (
            <table className="table table-striped">
                <Cabecalho />
                <Corpo dadosRecebidosAlunosIN={dadosAlunosIN}
                       alunoARemover={alunoOUT} />
            </table>
        )
    }
}

export default Tabela
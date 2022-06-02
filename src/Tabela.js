/**
 * Tabela.js
 */

import React, { Component } from "react";

/**
 * cria o cabeçalho da tabela
 * @returns void
 */
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

/**
 * constroi o corpo da tabela
 * @param {*} props : lista com os dados a serem disponibilizados na tabela
 * @returns 
 */
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

/**
 * componente Tabela
 */
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
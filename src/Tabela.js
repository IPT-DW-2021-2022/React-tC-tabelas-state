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
             </tr>
         </thead>
     )
 }
 
 const Corpo = (dados) => {
     // iterar todos os elementos do JSON
     // e gerar as linhas da tabela
     const rows = dados.dadosRecebidosAlunosIN.map((row, index) => {
         return (
             <tr key={index}>
                 <td>{row.nome}</td>
                 <td>{row.apelido}</td>
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
         const { dadosAlunosIN } = this.props
 
 
         return (
             <table className="table table-striped">
                 <Cabecalho />
                 <Corpo dadosRecebidosAlunosIN={dadosAlunosIN} />
             </table>
         )
     }
 }
 
 export default Tabela
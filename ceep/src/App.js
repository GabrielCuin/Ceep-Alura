import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaDeCategorias";
import { toBeInTheDocument } from "@testing-library/jest-dom";
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[],
      categorias: [],
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias:novoArrayCategoria}
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayDeNotas = this.state.notas;
    arrayDeNotas.splice(index, 1);
    this.setState({notas:arrayDeNotas});
    console.log("Deletar");
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-pricipal">
          <ListaDeCategorias 
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias} />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}/>    
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;

import React, { Component } from 'react'
class App extends Component {

  state = {
    name: "Marcos",
    turma: "Vai na Web",
    comidaFavorita: "Lasanha",
    musicas: ["Even Flou", "Plene", "No Woman No Cry"],
    idade: 25
  }

  render(){
    return(
      <div>
        <h1> Meu nome é: {this.state.name}</h1>
        <h2> Minha idade é: {this.state.idade}</h2>
        <h3> Minha comida favorita é: {this.state.comidaFavorita}</h3>

        <ul>
          <ol>
            <li>{this.state.musicas[0]}</li>
            <li>{this.state.musicas[1]}</li>
            <li>{this.state.musicas[2]}</li>
          </ol>
        </ul>

        <img src="data:image/jpeg;base64,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"/>
      </div>
    )
  }
}

export default App
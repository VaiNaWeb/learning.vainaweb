---
slug: "/module-2/map"
date: "2022-02-20"
title: "10 - map()"
id: 21
category: "module-2"
---


#Map

O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

Utilizamos o map quando queremos executar ações sobre os valores do array, sejam eles números, string, objetos, etc.

Exemplo utilizando **map**:

```javascript
import React, { Component } from 'react'

class App extends Component {
  state = {
    devsVnw: [
      {
        name: "Cícero",
        age: 15,
        team: "Vai na Web"
      },
      {
        name: "Kraken",
        age: 16,
        team: "Vai na Web"
      },
      {
        name: "Kelvin",
        age: 17,
        team: "Vai na Web"
      }
    ]
  }
  render(){
    return(
      <div>
        {this.state.devsVnw.map((item) => (
          <div>
            <h2>Name: {item.name}</h2>
            <h2>Team: {item.team}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o seguinte retorno:

// Name: Cícero
// Team: Vai na Web

// Name: Kraken
// Team: Vai na Web

// Name: Kelvin
// Team: Vai na Web

```


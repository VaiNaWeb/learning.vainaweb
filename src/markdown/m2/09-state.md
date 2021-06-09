---
slug: "/module-2/state"
date: "2021-02-05"
title: "09 - State"
id: 20
category: "module-2"
---

#State dos Componentes

O state, em React, é onde guardamos os dados do nosso componente. Utilizamos o componente com class para declarar nosso state.

```javascript
import React, { Component } from 'react'

class App extends Component {

  state = {
    name: "Kraken"
  }

  render(){
    return(
      <div>
        <h1></h1>
      </div>
    )
  }
}

export default App
```
Utilizamos dentro de chaves {} a palavra this seguida de .state para acessar o state, após isso só precisamos escrever o nome da propriedade que queremos acessar.

```javascript
import React, { Component } from 'react'

class App extends Component {

  state = {
    name: "Kraken"
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default App
```

Exemplo acessando array:

```javascript
import React, { Component } from 'react'

class App extends Component {

  state = {
    devs: ["Kraken", "Kelvin", "Cícero", "Luan"]
  }

  render(){
    return(
      <div>
        <p>{this.state.devs[2]}</p>
      </div>
    )
  }
}

export default App
```

Exemplo acessando object:

```javascript
import React, { Component } from 'react'

class App extends Component {

  state = {
    dev: 
    {
      name: "Luan",
      age: 17,
      team: "Vai na Web"
    } 
  }

  render(){
    return(
      <div>
        <p>{this.state.dev.team}</p>
      </div>
    )
  }
}

export default App

```

Exemplo acessando array de objects:

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
        <p>{this.state.devsVnw[1].name}</p>
        <p>{this.state.devsVnw[1].team}</p>
      </div>
    )
  }
}

export default App
```

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




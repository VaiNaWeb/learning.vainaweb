---
slug: "/module-2/react"
date: "2021-02-05"
title: "08 - React"
id: 19
category: "module-2"
---

#React

O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.

##Componentes no React:

Componentes React são como funções JavaScript. Eles aceitam entradas como propriedades (chamadas “props”) e retornam novos elementos React, os chamados JSX.

##Criação de Componentes:

com class:

```javascript
import React, { Component } from 'react'

class App extends Component {

  render(){
    return(
      <div>
        <p>Esse é um componente de Class.</p>
      </div>
    )
  }
}

export default App
```

com function:

```javascript
import React from 'react'

function App() {
    return(
      <div>
        <p>Esse é um componente de Função.</p>
      </div>
  )
} 

export default App
```
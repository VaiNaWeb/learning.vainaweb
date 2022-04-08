---
slug: "/module-2/set-state"
date: "2022-01-06"
title: "12 - setState() / onCLick"
id: 23
category: "module-2"
---

# 12 - setState() / Evento onCLick


#onCLick

O evento onclick executa determinada funcionalidade quando um botão é clicado. Isso pode ocorrer quando um usuário envia um formulário, quando você altera determinado conteúdo na página da web e assim por diante. Você coloca a função em JavaScript que você quer executar dentro da tag de abertura do botão.
 


#setState

setState() agenda uma atualização para o objeto state de um componente. Quando o state muda, o componente responde renderizando novamente.

Utilizamos o setState quando queremos alterar o estato de algum elemento no state, geralmente armazenando esse comando em uma função a ser ativada com o evento onClick={}:

Como o elemento a ser alterado se encontra dentro do state, ou seja, dentro de um objeto, a chamada será feita também dentro de um objeto : setState( { } )

Exemplo utilizando **setState** e **onCLick**:

```javascript
import React, { Component } from 'react'

class App extends Component {
  state = {
   msg : 'Hello'
  }

newMsg = ()=>{
    this.setState({msg: 'Bye'})
}

  render(){
    return(
      <div>
       <button onCLick={this.newMsg}>ALTERAR MSG</button>
       <h1>{this.state.msg}</h1>
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o seguinte retorno:

// Bye

```


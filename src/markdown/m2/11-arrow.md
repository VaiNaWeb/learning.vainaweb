---
slug: "/module-2/arrow"
date: "2022-01-06"
title: "11 - Arrow Function"
id: 22
category: "module-2"
---

# 11 - Arrow function


A versão ES6 do ECMAScript adicionou muito recursos interessantes ao JavaScript. Mas, um recurso que se destacou com certeza foram as arrow functions. Elas são basicamente uma nova forma de criar funções com JavaScript, com uma estrutura mais curta, mas bem poderosa ao mesmo tempo.

**Sintaxe básica** 

Uma função de função convencional pode ser criada com este código:

function(){
return
}

Já a sintaxe básica de uma arrow function é a seguinte:

"nome da função" = () => {

}

Note que não escrevemos “function”. Além disso, usamos o sinal “=>” para criá-la, o que lembra uma flecha, fazendo jus ao nome “Arrow Functions”.

Exemplo utilizando **Arrow function**:

```javascript
import React, { Component } from 'react'

class App extends Component {
  
msg = ()=>{
  return <h1>Hi my name is Marlon!</h1>
}


// Para casos onde queremos retornar mais de uma informação, note que a regra da tag "envolvente" se mantém.

secondMsg = () =>{
  return(
    <div>
    <h2>Welcome to Vai na Web</h2>
    <p>Let's Code</p>
    </div>
  )
}

  render(){
    return(
      <div>
      {this.msg()}
       {this.secondMsg()}
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o seguinte retorno:

// Hi my name is Marlon!
// Welcome to Vai na Web
// Let's Code

```


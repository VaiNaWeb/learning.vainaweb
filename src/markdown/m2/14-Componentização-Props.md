---
slug: "/module-2/componentização-props"
date: "2022-01-06"
title: "14 - Componentização-Props"
id: 25
category: "module-2"
---

# 14 - Componentização / Props


##Componentizando nosso código

Componentização no react é uma forma de simplificar estruturas da sua aplicação em pequenas parte que podem ser reautilizadas.

É basicamente dividir pedaços da nossa aplicação em pequenos componentes, imagina que você tenha um formulário ou cabeçalho que será reaproveitado na sua aplicação quantas vezes você quiser e ele é dotado de um conjunto de css, html e javascript.

Só que no React a componentização é um grande diferencial, pois ele é totalmente baseado em componentes, em tudo dentro do react é um componente.

*Mão na massa*

Podemos criar um arquivo Teste.js dentro da pasta src.

Dentro do arquivo Teste.js criamos nossa estrutura desejada: 

```javascript
import React, { Component } from 'react'

export default function Teste(){
    return(
      <div>
        <h1>Eu sou um componente</h1>
      </div>
    )
}

export default App

// No exemplo acima não teremos um retorno, já que Teste.js não está sendo chamado dentro do nosso App.js

```

Pra exibirmos nosso componente, basta importarmos e utilizarmos no arquivo principal App.js : 


```javascript
import React, { Component } from 'react'
import Teste from './Teste.js'


class App extends Component {
  render(){
    return(
      <div>
      <Teste/>
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o seguinte retorno:

// Eu sou um componente

```

#Props

Props são propriedades extras que andam lado a lado com a componentização, podendo enriquecer nossos componentes com propriedades extras sem precisarmos reconstruir todo o componente: 

Exemplo utilizando **Props**:

```javascript

import React, { Component } from 'react'

export default function Teste( {novaProps}  ){
    return(
        <div>
        <h1>Eu sou um componente {novaProps}</h1>
        </div>
    )
}

export default App

```
------------------------------------------------------------------------------------------

```javascript
import React, { Component } from 'react'
import Teste from './Teste.js'


class App extends Component {
  render(){
    return(
      <div>
      <Teste novaProps='Agora com props'/>
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o seguinte retorno:

// Eu sou um componente Agora com props

```
---
slug: "/module-2/styled-components"
date: "2022-01-06"
title: "13 - Styled-components"
id: 24
category: "module-2"
---

# 13 - Styled-Components


##Conhecendo o Styled Components

Afinal, o que é Styled Components? Trata-se de uma biblioteca (lib) que nos permite escrever códigos CSS dentro do JavaScript, mas, você deve estar se perguntando, oque eu ganho com isso? Dessa maneira não precisamos mais ficar importando nossos arquivos .css em nossas páginas e se um dia precisarmos utilizar esse mesmo componente em outro projeto, uma das maneiras seria basicamente copiar o arquivo .js.

**Mão na massa** 

Pra instalação da nossa lib precisamos do seguinte comando no nosso terminal :

**npm install --save styled-components**

Após a instalação devemos importar essa nova lib para dentro do nosso código

-- import styled from 'styled-components'

Pronto!! Agora temos o poder de transformar nossas tags em componentes estilizáveis. Pra isso criamos uma nova const com as especificidades que desejamos pra depois substituírmos a própria tag pelo nosso componente

Exemplo utilizando **Styled-components**:

```javascript
import React, { Component } from 'react'
import styled from 'styled-components'


// O nome do novo componente deve sempre começar com letra maiúscula
const BoxH1 = styled.h1` 
color : red;
`

class App extends Component {
  render(){
    return(
      <div>
      <BoxH1>Eu sou um h1 estilizado</BoxH1> 
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o seguinte retorno:

// Eu sou um h1 estilizado *em cor vermelha

```

**GlobalStyle** 

Da mesma forma que utiliziamos componentes estilizados, também podemos estilizar elementos maiores e de forma global, pra isso precisamos importar nosso GlobalStyle diretamente do styled-components:

-- import {createGlobalStyle} from 'styled-components'


```javascript
import React, { Component } from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'


// O nome do novo componente deve sempre começar com letra maiúscula
const BoxH1 = styled.h1` 
color : red;
`
const GlobalStyle = createGlobalStyle`
body{
  background-color: gray
}
`

class App extends Component {
  render(){
    return(
      <div>
      <GlobalStyle/>
      <BoxH1>Eu sou um h1 estilizado</BoxH1> 
      </div>
    )
  }
}

export default App

// No exemplo acima teremos o retorno da body com a cor de fundo cinza.


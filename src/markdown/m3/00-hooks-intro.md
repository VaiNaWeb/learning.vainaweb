---
slug: "/module-3/hooks-intro"
date: "2021-09-13"
title: "00 - O que são os hooks?"
id: 31
category: "module-3"
---

# 00 - O que são os hooks?

Os hooks são um novo jeito de escrever componentes react de forma mais simples sem a necessidade de usarmos classes, constructors, etc. Com eles podemos escrever os mesmos componentes que antes com muito menos código :)

## Criando nosso primeiro componente usando hooks

Para começarmos o nosso entendimento sobre hooks vamos pegar como exemplo um contador que foi escrito usando classe:

```javascript
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super(props);

    this.state = {
      count: 0,
    };
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render(){
    return(
      <div>
        <p>você clicou {this.state.count} vezez!</p>
        <button onClick={this.addCount}>clique aqui.</button>
      </div>
    )
  }
}

export default App;
```

Até aqui nada demais, nosso bom e velho contador. Inicializamos um state **count** com o valor **0** e incrementamos esse valor a cada clique no button usando o método **addCount**. Vamos converter esse componente para o novo padrão utilizando os **hooks**.

## Hooks na prática

```javascript
import React, { useState } from 'react';

const App = () => {
  const [count, addCount] = useState(0);

  return(
    <div>
      <p>você clicou {count} vezez!</p>
      <button onClick={() => addCount(count + 1)}>clique aqui.</button>
    </div>
  )
}

export default App;
```

Bem diferente ne? Vamos quebrar em partes o processo:

Primeiro importamos um novo método do **react** chamado **useState** esse é o nosso **hook**. Com eles poderemos criar estados no nosso componente. A criação do nosso **state** é feita da seguinte forma:

```javascript
  const [count, addCount] = useState(0);
```

Criamos uma **constante** e vamos passar dois valores para ela dentro de um **array**. O primeiro item no **array** é o nosso estado, o segundo item 
é uma função que usaremos para modificar o estado. Após o operador de atribuição (=) vamos chamar nosso método **useState** e passar como argumento o valor inicial que desejamos para o nosso estado.

A partir disso, no nosso exemplo, todas as vezes que quisermos ler esse estado podemos checá-lo através da variável **count** e para alterar o estado usamos a função **addCount**.

### Mais exemplos

Copie o código abaixo em um sandbox e divirta-se :)

```javascript
import React, { useState } from 'react';

const App = () => {
  const [names, setNames] = useState(['Luan', 'Pâmela', 'Dandara', 'Kelvin']);

  return(
    <div>
      <p>Meus amigos preferidos:</p>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
```

```javascript
import React, { useState } from 'react';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  return(
    <div>
      {showMessage && (
        <p>Essa é minha mensagem para todos voçês: Busquem conhecimento</p>
      )}
      <button onClick={() => showMessage(!showMessage)}>
        {showMessage ? 'ocultar mensagem' : 'mostrar mensagem'}
      </button>
    </div>
  )
}

export default App;
```

```javascript
import React, { useState } from 'react';

const App = () => {
  const [list, changeList] = useState([
    {
      label: 'Limpar a casa',
      done: false,
    },
    {
      label: 'Estudar react',
      done: false,
    },
    {
      label: 'Assistir minha série favorita',
      done: false,
    }
  ]);

  const updateList = (text) => {
    changeList(
      ...list,
      {
        label: text,
        done: false
      }
    );
  }

  return(
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
      <button onClick={() => updateList('Aprender Hooks')}>
        novo item
      </button>
    </div>
  )
}

export default App;
```
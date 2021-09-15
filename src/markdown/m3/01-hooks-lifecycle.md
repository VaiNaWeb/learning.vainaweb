---
slug: "/module-3/hooks-lifecycle"
date: "2021-09-15"
title: "01 - Hooks Lifecycle"
id: 32
category: "module-3"
---

# 01 - Como usar lifecycles em componentes funcionais?

Usando componentes funcionais nós não conseguimos usar os métodos de lifecycle que estamos acostumados (componentDidMount, componentDidUpdate, componentWillUnmount). No mundo dos hooks temos um jeito para continuar executando códigos quando um componente é renderizado ou quando algum estado é alterado, para isso vamos usar o **useEffect**.

## Exemplos:

Para executar alguma operação após a montagem do componente nós criamos um **useEffect** passamos uma função e como segundo argumento um array vazio:

```javascript
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    alert('Olá, seu componente foi renderizado');
  }, []);

  return(
    <div>
      <p>Usando hooks!!!</p>
    </div>
  )
}

export default App;
```

Se quisermos executar algum trecho de código após uma mudança de estado nós podemos passar esse estado dentro do array e o **useEffect** irá ser executado sempre que esse estado for alterado, por exemplo:

```javascript
import React, { useState, useEffect } from 'react';

const App = () => {
  const [age, setAge] = useState(25);

  useEffect(() => {
    alert(`Parabéns, muitas felicidades nessa data especial`);
  }, [age]);

  return(
    <div>
      <button
        onClick={() => setAge(age + 1)}
      >
        Hoje é meu aniversário!
      </button>
    </div>
  )
}

export default App;
```

As vezes precisamos executar algum trecho de código quando o componente vai ser removido da tela, para isso nós também podemos usar o **useEffect**:

```javascript
import React, { useState, useEffect } from 'react';

const Button = (props) => {
  useEffect(() => {
    return () => {
      alert(`Adeus, foi muito bom te conhecer!`);
    }
  }, []);

  return(
    <button
      onClick={() => props.toggleButton()}
    >
      Clique para se despedir de mim!
    </button>
  )
}

const App = () => {
  const [showButton, changeButton] = useState(true);

  const toggleButton = () => {
    changeButton(!showButton)
  };

  return(
    <div>
      {showButton && (
        <Button
          toggleButton={toggleButton}
        />
      )}
    </div>
  )
}

export default App;
```
---
slug: "/module-2/switch"
date: "2021-02-05"
title: "06 - Switch"
id: 18
category: "module-2"
---

### Switch

Switch é uma estrutura condicional que podemos utilizar para executar um bloco de código caso ele atenda a condição.

Exemplo testando o dia da semana:

```javascript
let dia = new Date().getDay();

switch(dia){
    case 0:
        console.log("Hoje é Domingo.")
        break;
    case 1:
        console.log("Hoje é Segunda.")
        break;
    case 2:
        console.log("Hoje é Terça.")
        break;
    case 3:
        console.log("Hoje é Quarta.")
        break;
    case 4:
        console.log("Hoje é Quinta.")
        break;
    case 5:
        console.log("Hoje é Sexta.")
        break;
    case 6:
        console.log("Hoje é Sábado.")
        break;
    default:
        console.log("Dia inválido!")
}
```

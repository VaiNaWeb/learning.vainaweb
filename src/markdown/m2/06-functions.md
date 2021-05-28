---
slug: "/module-2/functions"
date: "2021-02-05"
title: "05 - Funções"
id: 17
category: "module-2"
---

### Function

Funções são blocos de códigos reutilizáveis, isso significa que não precisamos reescrever a mesma lógica para cada parte do nosso código.

Exemplo de função:

```javascript
function saudacao() {
    console.log("Olá!")
}

saudacao()
```

**Note que no exemplo acima precisamos chamar o nome da função seguido de parênteses para executar essa função**


Também podemos passar parâmetros para as nossas funções, esses parâmetros vão receber algum dado dinamicamente.

Exemplo:

```javascript
function saudacaoPessoa(nome) {
    console.log(`Olá ${nome}, seja bem vindo(a) ao Vai na Web! `)
}

saudacaoPessoa("Kraken")
```
O exemplo acima retorna a seguinte frase:

**Olá Kraken, seja bem vindo(a) ao Vai na Web!**

Podemos reutilizar a mesma função, passando parâmetros diferentes:

```javascript
function saudacaoPessoa(nome) {
    console.log(`Olá ${nome}, seja bem vindo(a) ao Vai na Web! `)
}

saudacaoPessoa("Luan")
saudacaoPessoa("Kelvin")
```

Nesse exemplo acima teremos as seguintes saídas:

**Olá Luan, seja bem vindo(a) ao Vai na Web!**
**Olá Kelvin, seja bem vindo(a) ao Vai na Web!**


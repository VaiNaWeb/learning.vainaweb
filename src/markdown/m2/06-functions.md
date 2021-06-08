---
slug: "/module-2/functions"
date: "2021-02-05"
title: "06 - Funções"
id: 17
category: "module-2"
---

# Funções

Funções são blocos de códigos reutilizáveis, isso significa que não precisamos reescrever o mesmo código varias vezes. Criamos o código atrelamos ele a um nome e sempre que precisarmos podemos chamar esse código usando esse nome.

## Definindo uma função

```javascript
function helloWorld() {
    console.log("Hello World!");
}

helloWorld(); // helloWorld!
```

No exemplo acima nós criamos uma **função** chamada "helloWorld". Podemos reutilizar essa função a qualquer momento usando seu nome seguido de parênteses:

```javascript
function helloWorld() {
    console.log("Hello World!");
}

helloWorld(); // Hello World!
helloWorld(); // Hello World!
helloWorld(); // Hello World!
```

## Parâmetros

Também podemos passar **parâmetros** para as nossas funções, eles são a porta de entrada para dados de fora da função. Os parâmetros permitem que eu execute uma função diversas vezes mas com informações distintas:

```javascript
function helloFriend(name) {
    console.log(`Olá ${name}, seja bem vindo(a) ao Vai na Web!`);
}

helloFriend("Kraken"); // -> `Olá Kraken, seja bem vindo(a) ao Vai na Web!`
helloFriend("Luan"); // -> `Olá Luan, seja bem vindo(a) ao Vai na Web!`
helloFriend("Kelvin"); // -> `Olá Kelvin, seja bem vindo(a) ao Vai na Web!`
```

## Parâmetros ou Argumentos?

Muitas vezes nos confundimos esses 2 conceitos e acabamos tratando-os como sinônimos, vamos entender melhor quem é quem nessa história:

```javascript
function helloFriend(name) {
    console.log(`Olá ${name}, seja bem vindo(a) ao Vai na Web!`);
}

helloFriend("Tiago Braga"); // -> `Olá Kraken, seja bem vindo(a) ao Vai na Web!`
```

Como já vimos, os **parâmetros** são a porta de entrada da nossa função, eles permitem que nossas funções recebam dados. Podemos ver no exemplo acima nossa **função** "helloPessoa" tem um **parâmetro** chamado **nome**. A dúvida que fica é: e o **argumento**? onde ele está?

**O argumento é o dado que a função recebe no momento da execução**. No nosso exemplo quando executamos a **função** passamos pra ela a **string** "Tiago Braga" ou seja essa **string** é o argumento da nossa **função**.

## Múltiplos Parâmetros

As **funções** podem receber quantos parâmetros forem necessários, mas existe uma regra: **respeite a ordem definida na criação da função**. Vamos entender com um exemplo:

```javascript
function helloFriend(name, nickname) {
    console.log(`Olá ${name}, seja bem vindo(a) ao Vai na Web! Posso lhe chamar de ${nickname}?`);
}

helloFriend("Ygor Fonseca", "Kraken"); // -> `Olá Ygor Fonseca, seja bem vindo(a) ao Vai na Web! Posso lhe chamar de Kraken?`
```

Notem que quando a **função** foi executada os **argumentos** passados seguem a ordem dos **parâmetros** definidos na criação da **função**. Vamos mudar e ver o que acontece?

```javascript
function helloFriend(name, nickname) {
    console.log(`Olá ${name}, seja bem vindo(a) ao Vai na Web! Posso lhe chamar de ${nickname}?`);
}

helloFriend("Kraken", "Ygor Fonseca"); // -> `Olá Kraken, seja bem vindo(a) ao Vai na Web! Posso lhe chamar de Ygor Fonseca?`
```

Viu a diferença? Que tal praticar um pouco mais? Crie funções para exibir as mensagens que voçê preferir, em pouco tempo você estará usando muitas **funções** nas suas aventuras em **JavaScript**

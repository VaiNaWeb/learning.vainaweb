---
slug: "/module-2/loops"
date: "2021-02-05"
title: "05 - Loops"
id: 16
category: "module-2"
---

# Estruturas de Repetição (Loops)

Os **loops** são uma estrutura de repetição que podem executar uma bloco de código diversas vezes. Existem alguns tipos de estruturas de repetição no **JavaScript**:

## for

Este tipo de **loop** geralmente é usado quando você quer uma quantidade finita e conhecida de repetições. Sempre que usamos uma estrutura de repetição nós usamos o conceito de **contador**.

O **contador** é uma variável que conta quantas vezes aquele bloco de código já foi executado. (é comum usarmos a letra i para nomear o contador)

A estrutura básica é a seguinte:

```javascript
for(contador; condição para sair do loop; incremento do contador) {
    // codigo que será executado
}
```

Contanto até 10 utilizando **for**:

```javascript
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```

Contagem regressiva utilizando **for**:

```javascript
for(let i = 10; i >= 0; i--){
    console.log(i);
}
```

Números pares até 100 utilizando **for**:

```javascript
for(let i = 0; i <= 100; i += 2){
    console.log(i);
}
```

Números ímpares até 100 utilizando **for**:

```javascript
for(let i = 1; i <= 100; i += 2){
    console.log(i);
}
```

### Loop Infinito

O **loop infinito** é um **loop** que nunca para de executar e fica eternamente repetindo seu bloco de código. Isso acontece por que a condição de saída nunca é satisfeita:

```javascript
for(let i = 10; i < 5; i++){
    console.log(i); // esse código será executado eternamente
}
```

![loop](https://media.giphy.com/media/MDXomrcGshGso/giphy.gif)

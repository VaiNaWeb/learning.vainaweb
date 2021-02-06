---
slug: "/module-1/css-measures"
date: "2021-02-05"
title: "CSS: Medidas"
id: 9
---


# 09 - CSS: Medidas

Quando criamos nossos layouts usamos diversos tipos de medidas, usamos a medidas de diversas formas: para dar tamanho aos nossos elementos para especificar distâncias entre os elementos, para especificar o tamanho de textos e por ai vai. Vamos conhecer algumas medidas e entender quando usar cada uma delas.

## Pixel

O pixel é uma unidiade **fixa** que foi muito usada no passado para criar layouts, ele corresponde a um pixel da tela. \(Não é bem assim que funciona mas é uma forma de entender\).

Podemos usá-lo para especificar tamanhos de elementos, fontes e aplicar espaços, apesar das **unidades relativas** serem mais apropriadas hoje em dia ele ainda é bastante utilizado.

Alguns exemplos:

```text
.box {
  width: 500px;
  height: 500px;
}
```

```text
.container {
  margin: 30px auto;
}
```

```text
.message {
  font-size: 24px;
}
```

## Porcentagem

Diferente do **pixel** as medidas em porcentagem são **relativas**, isso nos possibilita criar layouts flexíveis que se adaptam melhor a diferentes tamanhos de telas. Vamos entender isso com alguns exemplos:

```text
<div class="wrapper">
  <div class="box">
  </div>
<div>
```

```text
.wrapper {
  width: 500px;
  height: 400px;
  margin: 20px auto;
}

.box {
  width: 50%;
  height: 50%;
  background-color: red;
}
```

No código acima temos 2 divs uma com a **classe** "wrapper" e outra com a **classe** "box", a **div** container tem um tamanho **fixo** de **500px** por **400px** já a **div** box tem um tamanho **relativo** de **50%** por **50%**.

O que significa ser **relativo**?

**50%** de que exatamente?

A unidade de **porcentagem** sempre usará o elemento container como referência para calcular o valor, no exemplo acima o container da div **"box"** é a div **"wrapper"**. Isso significa que a **"box"** vai ter 50% da largura e 50% da altura da classe **"wrapper"** \(250px de largura e 200px de altura\).

Guarde isso:

**A unidade de porcentagem sempre usará o elemento container como referência**

## em

Outra unidade relativa é o **em**, muito usado para especificar tamanhos de fontes e espaçamentos. Essa unidade usa o tamanho da fonte do container mais próximo para calcular seu tamanho, vamos ao exemplo:

```text
  <div class="wrapper">
    <div class="box">
    </div>
  <div>
```

```text
.wrapper {
  width: 500px;
  height: 400px
  font-size: 10px;
  margin: 20px auto;
}

.box {
  width: 50%;
  height: 50%;
  margin-top: 2em;
  background-color: red;
}
```

Note que nós especificamos uma margem de **2em** na **classe** "box" o que esse valor representa? Se testarmos esse código no navegador e inspecionarmos as medidas vamos ver que essa margem terá o valor de **20px** por que?

Esse valor é calculado a partir do tamanho da fonte do container, ou seja, da propriedade **font-size** da classe "container". Como a classe "container" tem um **font-size** de **10px** temos então: **2em x 10px = 20px**.

## rem

Diferente do **em** a unidade **rem** é sempre relativa ao tamanho da fonte da página, em outras palavras ao tamanho da fonte da tag **html**. Vamos ao exemplo:

```text
  <div class="wrapper">
    <div class="box">
    </div>
  <div>
```

```text
html {
  font-size: 16px
}

.wrapper {
  width: 500px;
  height: 400px
  font-size: 10px;
  margin: 20px auto;
}

.box {
  width: 50%;
  height: 50%;
  margin-top: 2rem;
  background-color: red;
}
```

Nesse caso a margem da nossa div "box" será de **32px**, isso porque a unidade **rem** vai usar o **font-size** do **html** para calcular o tamanho final. Teremos então: **2rem x 16px = 32px**.

![bye bye](https://media.giphy.com/media/5T0kggDfBvLhSsrNM2/giphy.gif)


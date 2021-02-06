---
slug: "/module-1/css-box-model"
date: "2021-02-05"
title: "CSS: Box Model"
id: 7
---


# 07 - CSS: Box Model

Entender o conceito de **box model** é importantíssimo para criar nossos layouts, vamos investigar como o **navegador** aplica os tamanhos que definimos no nosso **CSS** e as principais propriedades usadas.

## Definindo Tamanhos

Vamos criar uma **div** e entender como o **box model** define o que vemos na página:

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Meu Quadrado</h1>

  <div class='box'>
  </div>
</body>
</html>
```

```text
  .box {
    width: 150px;
    height: 150px;
    background-color: red;
  }
```

Com esse código inicial vamos ver uma quadrado vermelho na tela com 150px de largura e 150px de altura, vamos adicionar mais **propriedades** no nosso **CSS** e ver como isso afeta nosso layout:

```text
  .box {
    width: 150px;
    height: 150px;
    margin: 15px;
    padding: 15px;
    border: 2px solid black;
    background-color: red;
  }
```

Vamos quebrar isso em partes:

A primeira coisa que precisamos entender é que **todo elemento na nossa página representa uma caixa com uma largura e altura**.

As propriedades **width** e **height** definem a largura e a altura respectivamente.

Temos outras 2 **propriedades** muito importantes: **margin** e **padding**, ambas adicionam espaço no elemento, enquanto a propriedade **margin** adiciona um espaço fora do elemento, o **padding** adiciona espaço dentro do elemento \(dentro da borda\). As outras propriedades adicionam uma **borda** e um **background** respectivamente.

**width** - define a largura do elemento  
**height** - define a altura do elemento  
**margin** - adiciona espaço entre o elemento e os outros em volta  
**padding** - adiciona espaço entre o conteúdo em si e a borda

Inspecionando o quadrado no **browser** vamos ver que ele tem na verdade 180px de largura e 180px de altura mas foi especificado 150px por 150px, por que isso acontece?

O nosso **browser** calcula os espaços dos elementos de uma maneira um pouco diferente do que imaginamos, quando nós adicionamos um **padding** de 15px estamos criando um espaço desse tamanho em todos os lados do elemento \(acima, abaixo, esquerda, direita\). O navegador então vai adicionar ao tamanho final esses espaços internos, somando o espaço interno da esquerda e da direita com a largura temos:

**150 + 15 + 15 = 180px**

O mesmo acontece com a altura que é acrescentada ao espaço de cima e de baixo:

**150 + 15 + 15 = 180px**

Esse comportamento não é tão evidente e acaba confundindo os desenvolvedores com muita frequência, vamos aprender a modificar esse comportamento padrão do nosso **navegador**!

## Box Sizing

Como vimos o **navegador** não define os tamanhos dos elementos de uma maneira muito conveniente, mas nós podemos sobscrever esse comportamento com uma **propriedade** chamada **box-sizing**, vamos colocar em prática:

```text
  .box {
    box-sizing: border-box;
    width: 150px;
    height: 150px;
    margin: 15px;
    padding: 15px;
    border: 2px solid black;
    background-color: red;
  }
```

Com essa propriedade nova \(**box-sizing**\) o nosso **navegador** irá respeitar os tamanhos especificados nas propriedades **width** e **height**. Se inspecionarmos nosso quadrado novamente vamos perceber que agora ele será renderizado com exatos 150px por 150px

## Dica Final

Como é muito mais fácil trabalhar com o **box-sizing** usando o valor **border-box** é uma boa prática aplicá-lo na página toda. Podemos fazer isso criando um **seletor universal**:

```text
  * {
    box-sizing: border-box;
  }
```

Agora todos os elementos da página irão respeitar os tamanhos especificados no nosso **CSS** ❤️ ❤️ ❤️.

![bye bye](https://media.giphy.com/media/pP3FYgltTTJS0VQZpi/giphy.gif)


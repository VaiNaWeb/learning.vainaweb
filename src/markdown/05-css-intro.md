---
slug: "/module-1/css-intro"
date: "2021-02-05"
title: "05 - CSS"
id: 5
---


# 05 - CSS

Como ja vimos o **CSS - \(Folha de Estilo em Cascata\)** tem uma função estética, usamos com o propósito de modificar a aparência dos elementos, vamos entender como isso acontece:

## Sintaxe

O nosso documento css consiste de vários **seletores** que descrevem quais elementos e como eles serão modificados, essa é a sintaxe de um seletor:

```css
p {
  color: blue;
}
```

Começamos descrevendo qual elemento queremos modificar, podemos modificar uma **classe** um **id** ou uma **tag**. No exemplo acima estamos dizendo que todas as modificações desse **seletor** serão aplicadas em qualquer tag **p** \(parágrafo\).

Dentro do **seletor** temos o que chamamos de **propriedades** e seus respectivos **valores**, no exemplo usamos a propriedade **color** e o valor **blue**. Com esse código todos os parágrafos da página serão exibidos na cor azul. **Notem que precisamos usar os dois pontos após o nome da propriedade e um ponto e vírgula ao final da linha**

Esse é o modelo, não se esqueça dele :\)

```css
seletor {
  propriedade: valor;
}
```

## Herança

Quando estamos começando no **CSS** sempre ficamos perdidos quando vemos determinados **styles** sendo aplicados em algum elemento que não sabemos de onde veio e isso pode causar um pouco de dificuldade no processo de aprendizado da tecnologia, vamos entender isso com um exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div>
    <p>
      Meu parágrafo de texto, bla bla bla...
    <p>
  </div>
</body>
</html>
```

```css
div {
  font-size: 36px;
}
```

Se rodarmos esse código vamos perceber que nosso parágrafo irá ser renderizado com 36px mesmo não tendo nenhum seletor que aplique essa regra diretamente nele. O que acontece é que temos um seletor na **div** que especifica o **font-size** e algumas propriedades do **CSS** como **font**, **color**, e muitas outras são aplicadas a todos os filhos do elemento especificado no seletor. Esse comportamento de determinadas propriedades recebidas nos elementos pelos seus "**pais**" é chamado de **herança**.

## Especificidade

Para melhor usarmos o **CSS** no dia a dia entender o conceito de **especificidade** é fundamental. Isso vai poupar muito tempo com a cabeça no teclado tentando entender por que seu layout não é renderizado da maneira correta.

Imagine o seguinte cenário:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div>
    <p>
      Kraken!!!
    </p>
  </div>

  <p>
    Kelvin!!!
  </p>
</body>
</html>
```

```css
p {
  color: blue;
}

div p {
  color: red;
}
```

No exemplo acima temos dois parágrafos mas um deles está dentro de uma **div** e o outro não, no nosso **CSS** temos 2 **seletores** um que muda todos os parágrafos e outro **seletor** que muda apenas os parágrafos dentro de uma **div**, se testarmos esse código veremos que o nome Kraken ficará em vermelho e o nome Kelvin em azul. Isso acontece por causa da **especificidade** de cada **seletor**, toda vez que o **navegador** encontrar 2 regras conflitantes em um mesmo elemento a opção mais específica é usada. No nosso exemplo o segundo seletor **div p {}** tem uma **especificidade** maior do que o seletor acima dele **p {}** por isso suas regras prevalecem.

## Cascata

O termo **cascata** está presente no nome da tecnologia, obviamente ele deve ser importante nesse universo. Vamos entender o que ele significa:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <p>
    Olá!!!
  </p>
</body>
</html>
```

```css
p {
  color: green;
}

p {
  color: purple;
}
```

Se testarmos o código acima no nosso navegador veremos que o texto terá a cor roxa isso significa que o **navegador** aplicou o segundo **seletor** e ignorou o primeiro. Esse é o conceito de **cascata**: **Quando duas regras se aplicam ao mesmo elemento e tem a mesma especificidade a que vier por último será usada**.

![bye bye](https://media.giphy.com/media/gHVEO9ydQDDl4AJcfc/giphy.gif)


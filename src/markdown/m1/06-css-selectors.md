---
slug: "/module-1/css-selectors"
date: "2021-02-05"
title: "06 - Seletores CSS"
id: 6
category: "module-1"
---


# 06 - Seletores CSS

O **CSS** nos dá a possibilidade de modificar a aparência de nossos sites e ele faz isso usando algo que chamamos de **seletor**. 

Vamos entender quais são os tipos de seletores e quando usá-los:

## Tag

O **seletor** de **tag** é o mais simples, com ele aplicamos os valores em todas as vezes que uma determinada **tag** for usada na página:

```css
p {
  color: blue;
}
```

No exemplo acima nós estamos dizendo que toda vez que uma **tag** **p** for encontrada na página pelo **navegador**, ele deve renderizar com a cor azul.

**Os seletores de tags são muito usados para sobrescrever estilos que já vem do browser**

## ID

O **seletor** de **id** é aplicado no elemento com o id especificado, por exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css"/>
</head>
<body>
  <button id="button">
    Clique aqui!
  </button>

  <button>
    Clique novamente!!!
  </button>
</body>
</html>
```

```css
#button {
  background-color: purple;
}
```

Nesse caso apenas o primeiro **button** ficaria com o fundo roxo. Como o **id** é único, ou seja, não podemos aplicar o mesmo **id** em mais de um elemento da página, o seletor de **id** não é recomendado. 

Vamos falar do seletor mais usado então!

## Class

Sem dúvidas o melhor e mais usado tipo de **seletor**, ele é responsável por aplicar os estilos em qualquer elemento que tenha a classe especificada. Vamos ao exemplo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css"/>
</head>
<body>
  <button class="button">
    Clique aqui!
  </button>

  <button class="button">
    Clique novamente!
  </button>
</body>
</html>
```

```css
.button {
  background-color: purple;
}
```

Diferente do **seletor** de **id**, esse **seletor** será aplicado em qualquer elemento com a **classe** *.button*. Notem que no **seletor** de **classe** nós usamos um ponto \(**.**\) antes do nome. Com esse tipo de **seletor** nosso **CSS** será melhor reaproveitado, podemos criar uma classe e reutilizar em diversos elementos na página.

## Dicas

1. **Use o seletor de tag apenas para sobrescrever regras do navegador!**  
2. **Sempre use o seletor de classe para estilizar a sua página!**

Escolher como chamar a sua **classe** pode ser difícil no começo, então aqui vão algumas dicas:

* Foco no conteúdo e nunca no layout! Uma **classe** com o nome "botao-azul" não é legal pois se for preciso mudar a cor do botão para roxo o nome perde o sentido. Que tal usar um nome como: "botao-produto" ou "botao-compra"? Muito melhor né?
* Use nomes em inglês! A internet e suas tecnologias respiram esse idioma e a maioria das pessoas no mundo também programam nele. Com o tempo você vai perceber que a maioria dos elementos ja tem um ou dois nomes que quase todo mundo usa. Não desanime, persista nesse hábito!
* Ainda tem dúvidas no nome? Procure um site que usa um **layout** parecido inspecione o elemento e veja qual o nome da **classe** ele usa. Provavelmente você irá encontrar alguem que já pensou nesse nome antes.

![bye bye](https://media.giphy.com/media/QM5lHSyFjz1XW/giphy.gif)


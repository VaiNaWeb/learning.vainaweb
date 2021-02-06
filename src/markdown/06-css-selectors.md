---
slug: "/module-1/css-selectors"
date: "2021-02-05"
title: "06 - Seletores CSS"
id: 6
---


# 06 - Seletores CSS

Como já sabemos, nós conseguimos modificar a aparência de nossos sites com o **CSS** e ele faz isso usando algo que chamamos de **seletor**. Vamos entender quais são os tipos de seletores e quando usá-los:

## Tag

O **seletor** de **tag** é o mais simples, com ele nós aplicamos os valores em todas as vezes que uma determinada **tag** for usada na página:

```text
 p {
   color: blue;
 }
```

No exemplo acima nós estamos dizendo que toda vez que uma **tag** **p** for encontrada na página pelo **navegador** ele deve renderizar com a cor azul.

**Os seletores de tags são muito usados para sobrescrever estilos que já vem do browser**

## ID

O **seletor** de **id** é aplicado no elemento com o id especificado, por exemplo:

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
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

```text
  #button {
    background-color: purple;
  }
```

Nesse caso apenas o primeiro **button** ficaria com o fundo roxo, como o **id** é único \(não podemos aplicar o mesmo **id** em mais de um elemento da página\), o seletor de **id** não é recomendado. Vamos falar do seletor mais usado entao!

## Class

Sem dúvidas o melhor e mais usado tipo de **seletor**, ele irá aplicar os estilos em qualquer elemento que tenha a classe especificada. Vamos ao exemplo:

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
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

```text
  .button {
    background-color: purple;
  }
```

Diferente do **seletor** de **id** esse **seletor** irá ser aplicado em qualquer elemento com a **classe** "button". Notem que no **seletor** de **classe** nós usamos um ponto \(**.**\) antes do nome. Com esse tipo de **seletor** nosso **CSS** será muito mais reaproveitado, podemos criar uma classe e reutilizar em diversos elementos na página.

## Dicas

**Use o seletor de tag apenas para sobrescrever regras do navegador!**  
**Sempre use o seletor de classe para estilizar a sua página!**

Escolher como chamar a sua **classe** é muito difícil no começo, aqui vão algumas dicas:

* Foco no conteúdo e nunca no layout! Uma **classe** com o nome "botao-azul" não é legal \(se eu mudar a cor do botão para roxo o nome perde o sentido\). Que tal usar um nome como: "botao-produto" ou "botao-compra"? Muito melhor ne?
* Use nomes em inglês! Como todos sabemos a internet respira esse idioma e a maioria das pessoas no mundo também programam nele. Com o tempo você vai perceber que a maioria dos elementos ja tem um ou dois nomes que quase todo mundo usa. Não desanime, persista nesse hábito!
* Ainda tem dúvidas no nome? Procure um site que usa um **layout** parecido inspecione o elemento e veja qual o nome da **classe** ele usa. Provavelmente você irá encontrar alguem que já pensou nesse nome antes.

![bye bye](https://media.giphy.com/media/QM5lHSyFjz1XW/giphy.gif)


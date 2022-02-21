---
slug: "/module-1/how-sites-are-built"
date: "2021-02-05"
title: "01 - Como os sites são construídos?"
id: 1
category: "module-1"
---

# 01 - Como os sites são construídos?

Vimos na última aula que a internet trabalha no modelo **cliente/servidor**. No fim do dia tudo que o nosso navegador \(cliente\) faz é interpretar os arquivos que recebe do servidor e renderizar na tela. Mas que arquivos são esses? Existe algum padrão? Como esses arquivos são feitos?

Para exibir um website na tela, seu navegador usará 3 linguagens diferentes: **HTML**, **CSS** e **Javascript**:

![HTML,CSS,JS](https://media.giphy.com/media/fuJPZBIIqzbt1kAYVc/giphy.gif)

## HTML

**HTML** - *Hyper Text Markup Language* ou em português: Linguagem de Marcação de Hipertexto.

O **HTML** é uma linguagem de marcação e sua função é marcar o conteúdo da página e garantir que o conteúdo tenha semântica \(significado\). Esse processo é feito por meio de **TAGS** que nos permitem criar documentos que tenham significado e possam ser entendido por outras pessoas e computadores \(servidores e clientes\).

<img src="https://diegomariano.com/wp-content/uploads/2020/08/tag.png" alt="tag example" width="200"/>

###Exemplo de um documento HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```
<br>

## CSS

**CSS** - *Cascading Style Sheet* ou em português: Folha de Estilos em Cascata.

O **CSS** por sua vez tem uma função puramente estética: serve para modificar a aparencia dos documentos **HTML**. O **CSS** é um mecanismo muito poderoso para personalizar os documentos **HTML** usando uma série de propriedades que modificam tamanhos, espaços, posicionamento, cores, fontes, etc.

###Exemplo de um documento CSS:

```css
.button {
  width: 90px;
  height: 25px;
  background-color: purple;
}
```
<br>

## JavaScript

O **JavaScript** é a útltima peça desse quebra-cabeça. O **JS** é uma linguaguem de programação criada em 1995 utilizada principalmente no lado do cliente \(mas também pode ser usada no lado do servidor\) e tem a responsabiliade de tornar as páginas web mais interativas modificando os documentos **HTML** e **CSS** no momento da execução da página. Nosso querido JS vem evoluindo muito na última década e hoje é mantida e padronizada pelo grupo [ECMA](https://www.ecma-international.org/), dando origem ao seu nome oficial: **ECMAScript**

###Exemplo de código em JavaScript/EcmaScript:

```javascript
 var hello = 'Hello World';
```


![bye bye](https://38.media.tumblr.com/51a5e55dc04c26b623bd2245e42ee5f2/tumblr_n7ghy9Fevo1smcbm7o1_400.gif)


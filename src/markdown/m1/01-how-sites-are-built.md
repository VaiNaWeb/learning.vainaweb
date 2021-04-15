---
slug: "/module-1/how-sites-are-built"
date: "2021-02-05"
title: "01 - Como os sites são construídos?"
id: 1
category: "module-1"
---

# 01 - Como os sites são construídos?

Como ja sabemos, a internet trabalha no modelo **cliente/servidor**, no fim do dia tudo que o nosso navegador \(cliente\) faz é interpretar os arquivos que recebe do servidor e renderizar na tela. Mas que arquivos são esses? Existe algum padrão? Como esses arquivos são feitos?

Para exibir um website na tela seu navegador usará 3 linguagens diferentes: **HTML**, **CSS** e **Javascript**:

## HTML

O **HTML** é uma linguagem de marcação. HTML - Hyper Text Markup Language ou em português: Linguagem de Marcação de Hipertexto. A sua função é marcar o conteúdo da página e garantir que o conteúdo tenha semântica \(significado\), esse processo é feito por meio de **TAGS**. Por meio dessas **TAGS** nós conseguimos criar documentos que tenham significado e possam ser entendido por outras pessoas e computadores \(servidores e clientes\).

Exemplo de um documento HTML:

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

## CSS

O **CSS** por sua vez tem uma função puramente estética: ele serve para modificar a aparencia dos documentos **HTML**. O **CSS** - Cascading Style Sheets ou em português: Folha de Estilos em Cascata. É um mecanismo muito poderoso para personalizar os documentos **HTML** usando uma série de propriedades que modificam tamanhos, espaços, posicionamento, cores, fontes, etc.

Exemplo de um documento CSS:

```css
.button {
  width: 90px;
  height: 25px;
  background-color: purple;
}
```

## Javascript

O **Javascript** é a útltima peça desse quebra-cabeça, uma linguaguem de programação criada em 1995 utilizada principalmente no navegador \(também pode ser usada no lado do servidor\) e tem a responsabiliade de tornar as páginas web mais interativas modificando os documentos **HTMl** e **CSS** no momento da execução da página. Ela vem evoluindo muito na ultima década e é mantida e padronizada pelo grupo [ECMA](https://www.ecma-international.org/) dando origem ao seu nome oficial: **ECMAScript**

Exemplo de código em JavaScript/EcmaScript:

```javascript
 var hello = 'Hello World';
```

![HTML,CSS,JS](https://media.giphy.com/media/fuJPZBIIqzbt1kAYVc/giphy.gif)


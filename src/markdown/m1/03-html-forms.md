---
slug: "/module-1/html-forms"
date: "2021-02-05"
title: "03 - HTML na prática: Forms"
id: 3
category: "module-1"
---

# 03 - HTML na prática: Forms

## O que é um form?

A tag **form** \(formulário\) é utilizada para agrupar elementos interativos, onde o usuário vai inserir informações que serão enviadas para um servidor. As tags mais comuns utilizadas em formulários são:

1. Label
2. Input
3. Button

Exemplo de um formulário html:

```html
<!-- Simple form which will send a POST request -->
<form action="" method="post">
  <label for="name">Name:</label>
  <input id="name" type="text" name="name" placeholder="escreva seu nome">
  <input type="submit" value="Save">
</form>
```

Vamos quebrar esse código em partes:

```html
<!-- Simple form which will send a POST request -->
<form action="" method="post">

</form>
```

Primeiro criamos uma tag **form** que será responsável por agrupar todos os campos e buttons que iremos usar.

```html
<label for="name">Name:</label>
```

Agora criamos uma tag **label** que é usada como legenda para a tag **input** que vamos usar no próximo passo.

```html
<input id="name" type="text" name="name" placeholder="escreva seu nome">
```

A tag **input** é como criamos um campo onde o usuário irá digitar as informações, esse campo pode ser de diferentes tipos: \(text, email, password\). No nosso caso o **input** tem o tipo **"text"**, notem também que usamos um atributo chamado **placeholder** que é utilizado para exibir um texto dentro do campo enquanto ele está vazio.

```html
<input type="submit" value="Save">
```

Por último temos um **input** com um type especial chamado **submit**, esse **input** é utilizado para submeter \(enviar\) o formulário para um servidor quando ele é clicado. Na prática ele é um **button** que envia todos os dados escritos nos campos para algum servidor.

Agrupando todas essas tags nós temos nosso primeiro formulário pronto :\)

```html
<form action="" method="post">
  <label for="name">Name:</label>
  <input id="name" type="text" name="name" placeholder="escreva seu nome">
  <input type="submit" value="Save">
</form>
```

![thanks](https://media.giphy.com/media/psmj7c3DbrJKkbRYFj/giphy.gif)


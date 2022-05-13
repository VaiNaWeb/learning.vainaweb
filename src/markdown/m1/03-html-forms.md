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

1. \<label\>
2.  \<input\>
3.  \<button\>

Exemplo de um formulário html:

```html
<form>
  <label for="name">Name:</label>
  <input id="name" type="text" name="name" placeholder="escreva seu nome">
  <input type="submit" value="Save">
</form>
```

Vamos quebrar esse código em partes:

1. Marcando nosso formulário: 

```html

<form>

</form>
```

Primeiro criamos uma tag **form** que será responsável por agrupar todos os campos e buttons que iremos usar.

2. Criando uma legenda visível:

```html
<label for="name">Name:</label>
```

Agora criamos uma tag **label** que é usada como legenda para a tag **input** que vamos usar no próximo passo.

3. Criando o primeiro input:

```html
<input id="name" type="text" name="name" placeholder="escreva seu nome">
```

Usamos a tag **input** para criar um campo onde o usuário pode digitar as informações pedidas no formulário. 

Esse campo pode receber diferentes tipos de dados: text, email, password, number, tel, por exemplo. 

No nosso caso o **input** tem o tipo **"text"**, notem também que usamos um atributo chamado **placeholder** que é utilizado para exibir um texto dentro do campo enquanto ele está vazio.

4. Criando um botão:

```html
<input type="submit" value="Save">
```

Por último temos um **input** com um type especial chamado **submit**, esse **input** é utilizado para submeter \(enviar\) o formulário para um servidor quando ele é clicado. Na prática ele é um **button** que envia todos os dados escritos nos campos para algum servidor.

Agrupando todas essas tags nós temos nosso primeiro formulário pronto :)

```html
<form>
  <label for="name">Name:</label>
  <input id="name" type="text" name="name" placeholder="escreva seu nome">
  <input type="submit" value="Save">
</form>
```

Há ainda muitos atributos úteis que não vimos ainda, por agora, veremos mais alguns dos mais usados.

1. \<textarea\>
2. \<input type="radio"\>
3. \<input type="checkbox"\>
4. \<select\>
5. \<fieldsets\>
6. \<legend\>


Criando o primeiro textarea:

Diferente do input, esse elemento pode aceitar textos maiores, ideal para quando queremos receber um texto com mais de uma linha.Ele aceita apenas um tipo de valor, o atributo name.

```html
<form>
  ...
    <textarea name="comentario">
      Deixe aqaui seu comentaario...
    </textarea>
  ...
</form>
```

![thanks](https://media.giphy.com/media/psmj7c3DbrJKkbRYFj/giphy.gif)


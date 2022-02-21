---
slug: "/module-1/html-semantic"
date: "2021-02-05"
title: "04 - Semântica & Acessibilidade"
id: 4
category: "module-1"
---

# 04 - Semântica & Acessibilidade

A internet foi inicialmente concebida como um meio de compartilhamento de documentos acadêmicos e com o passar dos anos ela se transformou em um lugar onde podemos compartilhar os mais variados tipos de documentos, imagens, videos, etc. 

Buscando acompanhar essa evolução drástica da internet,  as mentes brilhantes por trás das tecnologias que sustentam a web \(**HTML**, **CSS**, **JavaScript**\) começaram a adaptá-las para que servissem ao avanço da internet moderna. 

Uma dessas novidades são as **tags semânticas**.

##Alguns exemplos de **tags semânticas** são:

### <**main**> : marca o conteúdo principal da sua página e deve ser único.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    todo o conteúdo da página entra aqui.
  </main>
</body>
</html>
```

### <**header**>: usado para definir o cabeçalho da página e introduzir o assunto da página ou de um artigo. Geralmente é o primeiro elemento a ser mostrado visualmente.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    <header>
      <h1>Marlon Brando</h1>
      <h2>Músico<h2>
    </header>
  </main>
</body>
</html>
```

### <**section**>: representa uma seção dentro do seu site, como uma seção sobre um produto ou uma pessoa.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    <section>
      <h1>Sobre Mim</h1>
      <p>Eu gosto de brócolis.<p>
    </section>
  </main>
</body>
</html>
```

### <**aside**>: representa uma seção de conteúdo secundário e menos importante do que o conteúdo usado nas **sections**. Geralmente usado em menus laterais onde temos informações adicionais do site.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    <section>
      <h1>Sobre Mim</h1>
      <p>Olá, meu nome é Dan e sou professor.</p>
    </section>

    <aside>
      <h3>Educação<h3>
      <p>A educação é um instrumento de transformação.</p>
    </aside>
  </main>
</body>
</html>
```

### <**footer**>: usado para definir o rodapé da página ou de uma **section** e contém informações referente ao autor, direitos autorais ou links relacionados ao conteúdo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    <footer>
      <p>Todos os direitos reservados.</p>

      <a href="http://facebook.com/minhapagina">Facebook</a>
      <a href="http://twitter.com/minhapagina">Twitter</a>
      <a href="http://linkedin.com/minhapagina">Linkedin</a>
    </footer>
  </main>
</body>
</html>
```

### <**nav**>: representa uma lista de links internos ou externos na página. Geralmente usado como menu de navegação pela página.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    <nav>
      <a href="#about">Sobre Mim</a>
      <a href="#history">Minha História</a>
      <a href="#skills">Habilidades</a>
    </nav>
  </main>
</body>
</html>
```

## Motivos para usar tags semânticas

O uso de todas essas tags traz vários benefícios:

1 - É muito mais fácil de entender nossa estrutura com as novas tags. Com elas nós conseguimos diminuir drasticamente o número de tags sem sentido como a \<div\> e deixamos nosso documento mais limpo.

2 - Seu site será encontrado por buscadores como o **Google** de forma mais fácil.

3 - Seu site poderá ser lido por leitores de tela e auxiliar pessoas com deficiência. ❤️ 


![bye bye](https://66.media.tumblr.com/86ac44885069c0b0e5fad2fadeeca8a1/tumblr_nd35r9BUzR1rqfhi2o1_500.gif)
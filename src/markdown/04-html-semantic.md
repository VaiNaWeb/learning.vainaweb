---
slug: "/module-1/html-semantic"
date: "2021-02-05"
title: "Semântica & Acessibilidade"
---

# 04 - Semântica & Acessibilidade

A internet foi inicialmente concebida como um meio para compartilhar documentos acadêmicos, com o passar dos anos ela se transformou em uma lugar onde as pessoas compartilham os mais variados tipos de documentos, imagens, videos, etc. Essa evolução drástica da internet não foi seguida pela evolução das tecnologias que a sustentam \(**HTML**, **CSS**, **JavaScript**\), por isso nos últimos anos as mentes brilhantes por trás dessas tecnologias começaram a adaptá-las para que servissem ao propósito da internet moderna, uma dessas novidades são as **tags semânticas**.

Alguns exemplos de tags semânticas são:

**main**: define o conteúdo principal da sua página, deve ser único na página.

**header**: usado para definir o cabeçalho da página e introduzir o assunto da página ou de um artigo, geralmente é a primeira tag usada no site.

```text
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

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <main>
    <header>
      <h1>José da Silva</h1>
      <h2>Músico<h2>
    </header>
  </main>
</body>
</html>
```

**section**: representa uma seção dentro do seu site, como uma seção sobre um produto ou uma pessoa.

```text
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
      <p>Eu começei minha carreira no ano de 1990...<p>
    </section>
  </main>
</body>
</html>
```

**aside**: representa uma seção de conteúdo secundário e menos importante do que o conteúdo usado nas **sections**, geralmente usado em menus laterais onde temos informações adicionais do site.

```text
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
      <p>Olá, meu nome é josé e sou um guitarrista.</p>
    </section>

    <aside>
      <h3>Bateria<h3>
      <p>A guitarra é um instrumento de cordas</p>
    </aside>
  </main>
</body>
</html>
```

**footer**: usado para definir o rodapé da página/seção ou de uma **section** e contém informações do autor, direitos autorais ou links relacionados ao conteudo da página/seção.

```text
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

**nav**: representa uma lista de links internos ou externos na página.

```text
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

## Motivos

O uso de todas essas tags traz varios benefícios:

1 - É muito mais fácil de entender, com as novas tags nós conseguimos diminuir drasticamente o número de tags sem sentido \(div\) e deixamos nosso documento mais limpo.

2 - Seu site será muito mais facilmente encontrado pelos buscadores \(Google\).

3 - Seu site poderá ser lido por leitores de tela e auxiliar pessoas com debilidades visuais.


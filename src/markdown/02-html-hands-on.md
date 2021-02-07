---
slug: "/module-1/html-hands-on"
date: "2021-02-05"
title: "02 - HTML na prática: Títulos, Textos, Listas, Imagens e Links"
id: 2
---

# 02 - HTML na prática: Títulos, Textos, Listas, Imagens e Links

## O que é uma TAG?

As tags delimitam o início e o fim de um conteúdo específico, elas são escritas no seguinte formato:

```html
<nome-da-tag>Conteúdo da tag</nome-da-tag>
```

Notem que as tags possuem abertura e fechamento, a tag de abertura e escrita usando **&lt;&gt;** e a tag de fechamento também mas com o adicional da **/** ficando assim: **&lt;/&gt;**

Ex \(tags fictícias para fins de exemplificação\):

```html
<meu-titulo>Conteúdo da tag</meu-titulo>
```

```html
<minha-imagem>Conteúdo da tag</minha-imagem>
```

```html
<meu-texto>Conteúdo da tag</meu-texto>
```

## Introdução ao documento HTML

Como vimos o **HTML** é a linguagem que usamos para marcar nossos documentos que serão lidos na web utilizando tags. Vamos conhecer na prática algumas dessas tags, mas antes vamos entender a estrutura básica que todo documento **HTML** precisa ❤️.

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

Vamos entender isso por partes:

```html
<!DOCTYPE html>
```

Essa primeira linha é onde o documento informa para o cliente \(navegador\) que se trata de um documento **HTML**.

```html
<html lang="en">
</html>
```

A tag **html** é o container de todo o seu documento ele também define o idioma da sua página através do atributo **lang**.

```html
<head>
</head>
```

A tag **head** é utilizada como um container sobre informações da página que não serão exibidas diretamente mas muito importantes como: Título, Arquivos de Estilos \(CSS\) e Metadata \(autor do documento, palavras chave, configuração de caracteres, etc\).

```html
  <meta charset="UTF-8">
```

É inserida dentro da tag **head** e especifica a configuração dos caracteres.

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

É inserida dentro da tag **head** e usada para definir o tamanho de referência do conteúdo e a sua escala, tem a função de melhorar e leitura do conteúdo em dispositivos móveis.

```html
  <title>Document</title>
```

É inserida dentro da tag **head** e define o título do documento que é exibido na aba do seu navegador.

```html
<body>
</body>
```

Aqui entra efetivamente o conteúdo da página, é onde vamos passar a maior parte do nosso tempo escrevendo as tags de conteúdo.

## Títulos

Todos os documentos possuem títulos. Eles expresssam a hierarquia do nosso conteúdo e no **HTML** não é diferente, temos 6 níveis de títulos disponíveis que são usados da seguinte forma:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Desenvolvimento Front-End</h1>
  <h2>Como Começar?</h2>
  <h3>HTML</h3>
  <h4>Semantica</h4>
  <h5>Títulos</h5>
  <h6>Como usar?</h6>
</body>
</html>
```

## Parágrafos

Nem só de títulos vive um texto, para descrever nosso conteúdo escrito temos uma tag especial chamada **p** \(esse **p** vem de paragraph - parágrafo\) e pode ser usado da seguinte forma:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>
    Meu primeiro parágrafo contando uma belíssima história cheia de personagens intrigantes.
  </p>
  <p>
    Meu segundo parágrafo apresentando um personagem específico.
  </p>
  <p>
    Aqui revelarei um segredo sobre o novo personagem que ninguém esperava!
  </p>
</body>
</html>
```

## Listas

Também podemos exibir listas em nossos documentos. Temos 2 opções, uma tag para listas ordenadas e outra para listas não ordenadas:

### Listas ordenadas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ol>
    <li>Maçã</li>
    <li>Banana</li>
    <li>Uva</li>
    <li>Morango</li>
    <li>Pera</li>
    <li>Mamão</li>
  </ol>
</body>
</html>
```

### Listas não ordenadas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <li>Baleia</li>
    <li>Golfinho</li>
    <li>Tubarão</li>
    <li>Tartaruga</li>
    <li>Arraia</li>
    <li>Polvo</li>
  </ul>
</body>
</html>
```

Usamos a tag **ol** para representar listas ordenadas, ou seja os items dessa lista serão numerados.

As listas não ordenadas, sem numeração, são criadas pela tag **ul**.

Os items de ambas as listas são expressos pela tag **li**.

## Imagens

Também podemos fazer uso de medias em nossos documentos, as imagens são um ótimo meio de expressar uma idéia. Elas podem ser representadas em nosso documento **HTML** da seguinte forma:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <img src="https://www.vainaweb.com.br/assets/Logo-VnW.svg" alt="Logo Vai na Web" />
</body>
</html>
```

Notem que diferentemente das outras tags as imagens não são compostas de um par de abertura/fechamento e são utilizadas do seguinte modo:

```html
  <img src="" alt="" />
```

Os 2 atributos presentes na tag indicam o endereço da imagem a ser carregado \(**src**\) e uma mensagem alternativa caso a imagem não seja carregada \(**alt**\).

## Links

O link é a tag fundamental da web, graças a ela nós conseguimos associar os diferentes sites existentes na internet criando o que chamamos de rede. Vamos ver um exemplo:

```html
  <a href="https://www.google.com.br">Google</a>
```

```html
  <a href="about.html">Sobre</a>
```

A tag **a** \(link\) possúi um atributo chamado **href** onde podemos especificar para onde o usuário será enviado quando ele clicar, esse redirecionamento pode ser para uma página interna ou um site externo.


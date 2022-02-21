---
slug: "/module-1/html-hands-on"
date: "2021-02-05"
title: "02 - HTML na prática: Títulos, Textos, Listas, Imagens e Links"
id: 2
category: "module-1"
---

# 02 - HTML na prática: Títulos, Textos, Listas, Imagens e Links

## O que é uma TAG?

As tags delimitam o início e o fim de um conteúdo específico no seu documento HTML. Sua principal responsabilidade marcar a **estrutura de uma página da web.**

Os *elementos HTML* ou também chamados apenas de *tags*, seguem uma estrutura própria, como as tags fictícias abaixo demonstram:

```html
//estrutura básica

<nome-da-tag>Conteúdo da tag</nome-da-tag>

<meu-titulo>Título qualquer</meu-titulo>

<minha-imagem>Imagem</minha-imagem>

<meu-texto>Conteúdo da tag</meu-texto>

```

Notem que as tags possuem \<abertura\> e \</fechamento\>, sendo a tag de abertura e escrita usando **&lt;&gt;** e a tag de fechamento usando **&lt;/&gt;**

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3b570190-123e-4018-aa54-71f4805b176e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220220T174839Z&X-Amz-Expires=86400&X-Amz-Signature=8ade0d60dca6dd6bf4e8852ace8d84ed9b167609e42649e42ab0e16bd147b196&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" alt="tag example" width="400"/>

## Introdução ao documento HTML

Como vimos, o **HTML** é a linguagem que usamos para marcar nossos documentos que são construídos utilizando *tags*. Vamos conhecer na prática algumas das tags mais importantes, mas antes precisamos entender a estrutura básica que todo documento **HTML** precisa ❤️

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

Vamos entender linha por linha:

1. Informando ao navegador o tipo de documento:

```html
<!DOCTYPE html>
```

Essa primeira linha é onde o documento informa para o cliente \(navegador\) que se trata de um documento **HTML**.

2. Definindo o idioma usado no documento:

```html
<!DOCTYPE html>

<html lang="en"> </html>
```

A tag **html** é o container de todo o seu documento e também define o idioma da sua página através do atributo **lang**.

3. Lembretes ao navegador:

```html
<!DOCTYPE html>
<html lang="en">

<head></head>

</html>
```

A tag **head** é utilizada como um container sobre informações da página que serão exibidas diretamente ao navegador, como: Título, Arquivos de Estilos \(CSS\) e Metadata \(autor do documento, palavras chave, configuração de caracteres, etc\).

4. Configurando caracteres:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
</head>

</html>
  
```

É inserida dentro da tag **head** e especifica a configuração dos caracteres.

5. Configurando a escala do conteúdo:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

</html>
```

É inserida dentro da tag **head** e usada para definir o tamanho de referência do conteúdo e a sua escala, tem a função de melhorar e leitura do conteúdo em dispositivos móveis.

6. Configurando o título do documento:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Document</title>
</head>

</html>
```

É inserida dentro da tag **head** e define o título do documento que é exibido na aba do seu navegador.

7. Marcando o corpo da página:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body> </body>
</html>
```

Aqui entra efetivamente o conteúdo da página, é onde vamos passar a maior parte do nosso tempo escrevendo as tags de conteúdo.

## Inserindo Títulos

Todos os documentos possuem títulos. Eles expresssam a hierarquia do nosso conteúdo e no **HTML** não é diferente.

 Temos 6 níveis de títulos disponíveis que são representados da seguinte forma:

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

Nem só de títulos vive um texto, não é mesmo? 

Para descrever nosso conteúdo textual temos uma tag especial chamada **p** \(esse **p** vem de paragraph - parágrafo\) e pode ser usado da seguinte forma:

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

Também podemos fazer uso de mídias em nossos documentos e as imagens são um ótimo meio de expressar uma idéia. Elas podem ser representadas em nosso documento **HTML** da seguinte forma:

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


<img src="https://64.media.tumblr.com/62bf2fe7f067e4ab8ac47889c536845b/tumblr_n9s77zvQxz1smcbm7o1_500.gif" alt="bye bye" width="400px"/>
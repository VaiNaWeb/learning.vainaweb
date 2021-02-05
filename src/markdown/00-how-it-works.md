---
slug: "/module-1/how-it-works"
date: "2021-02-05"
title: "Como a internet funciona?"
---

# 00 - Como funciona a internet?

Todos nós usamos diariamente diversos aplicativos e sites, a internet ocupa uma porção enorme de nossas vidas. Desde o entretenimento até o estudo, no trabalho ou em casa, nas relações com amigos ou pessoas do outro lado do mundo. Em quase todas as atividades do dia, de alguma forma, estamos usando a internet, ela muda diariamente, das mais diversas formas, as nossas profissões e acelera o desenvolvimento de todas as tecnologias: assistir um filme nunca foi tão rápido, aprender um novo idioma nunca foi tão fácil, achar um livro nunca foi tão simples. É impossível viver no século XXI sem entender como usar essa ferramenta para melhorar nossas vidas.

## Do navegador ao servidor do Google em segundos!

Vamos dar alguns passos para trás e entender como nossas informações saem do nosso computador e chegam até os mais distantes lugares do planeta.

![Google](https://media.giphy.com/media/xQaeWyINrUXOE/giphy.gif)

A internet funciona baseada em um modelo chamado **"cliente - servidor"**, o navegador é o nosso **cliente**, com ele conseguimos acessar recursos na internet usando uma série de protocolos \(TCP/IP, DNS, HTTP\) esses recursos por sua vez estão armazenados em um **servidor**, \(geralmente em um galpão enorme com milhares de computadores\):

![Servidor](https://gcn.com/-/media/GIG/GCN/Redesign/Articles/Oct-2012/googledatacenter.png)

Toda vez que digitamos www.google.com em nosso navegador uma série de operações acontecem em uma velocidade impressionante e de repente a página do google está diante de nossos olhos, vamos quebrar isso em etapas:

1. A primeira coisa que o nosso navegador faz e uma requisição para um servidor muito especial chamado **DNS**, esse servidor é responsável por nos dar o endereço do servidor \(**IP Address**\) que precisamos, no nosso caso o do Google.
2. O servidor **DNS** devolve para o navegador o **IP** do servidor requisitado. Como os computadores são encontrados através do **IP** e não por seus nomes esses servidores **DNS** armazenam em uma tabela gigante o nome de todos os sites do mundo e seus respectivos **IP's**. Imaginem termos que decorar os números de todos os sites, Obrigado **DNS**! ❤️ ❤️ ❤️
3. Com esse endereço em mãos nosso navegador agora envia uma segunda requisição ao endereço IP do Google usando um protocolo chamado **HTTP** \(pense no HTTP como um idioma que o seu navegador irá usar para conversar com o servidor\)
4. Os dados chegam ao servidor do Google são processados e agora o servidor devolve as informações necessárias para o navegador e então o seu navegador processa os dados e monta a sua página na tela

![Servidor/Cliente](https://github.com/VaiNaWeb/gitbook-assets/raw/master/modulo-1/images/server-client.png)

**Cliente** - um computador capaz de acessar a internet \(seu navegador, seu celular\)

**Servidor** - um computador conectado a internet 24h capaz de receber requisições, processar, e devolver informações

**IP** - um número único que cada servidor possui para ser encontrado, semelhante ao endereço da sua casa

**DNS** - um servidor especial que possui uma tabela gigante onde guarda o nome e o **IP** de todos os sites do mundo

**HTTP** - um protocolo de comunicação que o seu navegador usa para "conversar" com o servidor \(uma especie de idioma baseado no padrão de requisição-resposta\)

![bye bye](https://media.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif)


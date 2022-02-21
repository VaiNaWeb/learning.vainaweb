---
slug: "/module-1/how-it-works"
date: "2022-20-02"
title: "00 - Como a internet funciona?"
id: 0
category: "module-1"
---

# Como funciona a internet?

Diariamente a internet ocupa uma porção enorme de nossas vidas. Desde o entretenimento até o estudo, no trabalho ou em casa, nas relações com amigos ou pessoas do outro lado do mundo. Hoje conseguimos pedir comida, agendar consultas, pagar contas e até comprar remédios pela internet.

Em constante mudança, ela muda diariamente as formas de se comunicar e acelera o desenvolvimento de todas as tecnologias: assistir um filme nunca foi tão rápido, aprender um novo idioma nunca foi tão fácil, achar um livro nunca foi tão simples.

Viver no século XXI sem entender as possibilidades de uso dessa ferramenta pode ser uma tarefa bem difícil.

## Do navegador ao servidor do Google em segundos 🚀

![Google](https://media.giphy.com/media/xQaeWyINrUXOE/giphy.gif)

A internet funciona baseada em um modelo chamado **"cliente - servidor"**.

O **navegador** é o nosso **cliente** e com ele conseguimos acessar recursos na internet usando uma série de protocolos \(TCP/IP, DNS, HTTP\), esses recursos por sua vez estão armazenados em um **servidor**, geralmente em um galpão enorme com milhares de computadores:

![Servidor](https://lh3.googleusercontent.com/W4JxFZmBMVdhsnbO_SDYUCclut_7Yc89eMgjWxwicilPeY9a9UXRxLE43T44WWR6Z5B65GKJaebO0J3lsVOJbQtkgzJdJmmuKIMNS4M=w600-l100-sg-rj-c0xffffff)

Toda vez que digitamos *www.google.com* em nosso navegador uma série de operações acontecem em uma velocidade impressionante e de repente a página do google está diante de nossos olhos.

 Vamos quebrar isso em etapas:

![Servidor/Cliente](https://github.com/VaiNaWeb/gitbook-assets/raw/master/modulo-1/images/server-client.png)

1. Quando digitamos o nome do site, a primeira coisa que o nosso navegador faz é pedir para um servidor chamado **DNS** o *endereço* correspondente ao nome que digitamos \(**IP Address**\)
2. O servidor DNS devolve para o navegador o IP do servidor requisitado \(pois os computadores são encontrados através do número do endereço IP e não pelo nome digitado no navegador.\)
3. Com esse endereço em mãos, nosso navegador envia uma segunda requisição ao endereço IP do Google usando um protocolo chamado **HTTP** 
4. Quando nossa requisição chega ao servidor do Google, o pedido é processado e então o servidor devolve as informações requisitadas para o navegador. Em seguida, o navegador processa os dados recebidos e monta a sua página na tela :)

<br>

### Palavras e siglas importantes:
**Cliente** - é qualquer dispositivo capaz de acessar a internet \(seu navegador, seu celular\)

**Servidor** - um super computador conectado 24h por dia e capaz de receber requisições, processar, e devolver informações requisitadas

**IP** - essa sigla significa *Internet Protocol*, ou seja, Protocolo de Internet. Esse é o protocolo responsável por atribuir um número identificador único para que cada servidor possa para ser encontrado corretamente na web \(semelhante ao endereço de uma  casa\) 

**DNS** - essa aqui significa *Domain Name Sistem*, ou Sistema de Nomes de Domínios. O DNS é um servidor especial que possui uma tabela gigante onde guarda o **IP** correspondente ao nome de todos os sites do mundo. Imaginem se tivéssemos que decorar os números de todos os sites que a gente gosta? Obrigado **DNS**! ❤️ ❤️ ❤️ 

**HTTP** - *Hypertext Transfer Protocol* é um protocolo de comunicação que o seu navegador usa para "conversar" com o servidor \(uma especie de idioma baseado no padrão de requisição-resposta\)

![bye bye](https://media.giphy.com/media/42D3CxaINsAFemFuId/giphy.gif)


---
slug: "/module-2/variables"
date: "2021-05-27"
title: "01 - Variáveis e Constantes"
id: 12
category: "module-2"
---


# 01 - Variáveis

Os softwares necessitam de um número bem grande de informações para serem executados, até um sistema simples para agendar pessoas para cortar cabelo precisaria de uma série se informacões: Qual o horário agendada? Qual o nome da pessoa? Vai cortar o cabelo apenas? E a barba? Vai cortar com o profissional de sempre? E se precisar remarcar? E se quiser agendar um dia específico todo mês?

Todas essas informacões precisam ser armazenadas enquanto o programa está sendo executado e a melhor maneira de fazer isso é usando as **variáveis**. Vamos falar de alguns tipos de dados simples que as **variáveis** podem armazenar mas antes disso vamos relembrar o que é uma **variável**:

**variável**: **É um espaço na memória reservado para armazenar um dado enquanto o programa está sendo executado**

Ná prática, debaixo dos panos a **variável** é simplesmente um local dentro do espaço disponível pela memória **RAM** onde seu software irá armazenar informações que ele precisa para a execução.

Ex: No cenário acima um sistema de agendamento de uma barbearia precisa armazenar o nome da pessoa que irá realizar o corte isso ocorrerá através de uma variável, trocando em miúdos a variável é um mecanismo que as linguagens de programação oferecem para o programador acessar a memoria **RAM** do computador e guardar informações.

## Criando uma variável:

Criar uma variável é super simple em qualquer linguagem de programação, em **Javascript** nós usamos a palavra **var** seguido do nome da variável:

```javascript
var nome;
```

Existe uma forma mais moderna usando a palavra **let** (vamos entender essa diferença lá na frente! )
```javascript
let idade;
```

## Atribuindo valores:

Para atribuir um valor usamos esse sinal: **=**. Por exemplo seu eu quiser atribuir meu nome à variavel nome ficaria assim:

```javascript
var nome;
nome = "Ygor Luiz Fonseca";
```

Ou do jeito moderno:

```javascript
let nome;
nome = "Ygor Luiz Fonseca";
```

E possível também criar uma variável e atribuir um valor ao mesmo tempo:

```javascript
var nome = "Ygor Luiz Fonseca";
```

```javascript
let nome = "Ygor Luiz Fonseca";
```

## Constantes:

Diferente das **variáveis** as **constantes** não podem ser alteradas durante a execução do programa ela é armazenada na memória e permanecerá inalteravel até o fim da execução.

No **JavaScript** nos podemos criar uma **constante** da seguinte forma:

```javascript
const nome = "Ygor Luiz Fonseca";
const idade = 25;
```

Lembre-se disso: **Uma vez declaradas esses valores não podem ser alterados durante toda a execução do programa**

## Dicas para criar variáveis:

Escolher nomes para as nossas variáveis parece uma tarefa muito dificil mas com algumas dicas podemos melhorar isso:

O uso de todas essas tags traz vários benefícios:

1 - O nome da variável deve expressar o seu conteúdo - uma **variável** que armazena uma idade não deveria chamar nome

2 - Sempre utilize nomes em inglês, 

3 - Seja breve e objetivo. lembre-se que outros desenvolvedores irão dar manutenção no seu código. :)
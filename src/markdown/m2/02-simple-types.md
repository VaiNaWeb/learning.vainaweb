---
slug: "/module-2/simple-types"
date: "2021-02-05"
title: "02 - Tipos de Dados Simples"
id: 13
category: "module-2"
---

# Tipos Simples

Vamos conhecer alguns tipos de dados que podem ser armazenados nas **variáveis** usando **JavaScript**.

## String

A **String** é uma sequência de caracteres, são geralmente usadas para armazenar textos. Alguns exemplos são:

- Endereços
- Nomes
- Mensagens

### Criando Strings:

Existem 3 formas de criarmos **strings**:

Aspas simples:

```javascript
var hello = 'Olá'; 
```

Aspas duplas:

```javascript
var hello = "Olá"; 
```

Crase:

```javascript
var hello = `Olá`; 
```

### Concatenando Strings

Para juntar (**concatenar**) duas palavras nós podemos usar o **operador** de soma:

```javascript
var name = `Luan`; 
var lastName = `Pires`;

var fullName = name + lastName;
```

Se rodarmos o código acima veremos que não existe um espaço entre as palavras. Vamos resolver?

```javascript
var name = `Luan`; 
var lastName = `Pires`;

var fullName = name + ' ' + lastName;
```

Agora estamos **concatenando** (juntando) um espaço entre as duas palavras. Em breve vamos aprender uma forma mais fácil de resolver :)

## Number

Diferente de outras linguagens o **JavaScript** considera qualquer valor numérico como **number**. Isso significa que não existe distinção entre números inteiros ou decimais.

Número inteiro:

```javascript
var numInt = 5;
```

Número decimal:

```javascript
var numDec = 1.25; 
```

### O JavaScript sabe matemática!

Podemos fazer uso de qualquer operador matemático dentro do **JavaScript**. Alguns exemplos:

```javascript
var age = 25;
var year = 2021;

var sum = age + year;
```

```javascript
var year = 2021;
var birth = 1995;

var age = year - birth;
```

```javascript
var pizza = 2;
var slices = 8;

var total = pizza * slices;
```

```javascript
var pizza = 2;
var slices = 8;
var friends = 4;

var slicePerFriend = (pizza * slices) / friends;
```

## Boolean

O **boolean** ou **bool** pode armazenar 2 valores: **true** ou **false**.

- **true**: representa verdadeiro
- **false**: representa falso

Esses 2 valores serão muito utilizados dentro de **condicionais** que vamos aprender em breve :)


## Null e Undefined

O **null** é um tipo simples do **Javascript** que representa uma variável vazia.

```javascript
var country = null;
```

O **undefined** é um tipo que representa **valor não definido**. Ele é muito confundido com o **null**, mas por mais que pareçam semelhantes eles tem propósitos diferentes.

**Todas as variáveis não inicializadas, ou seja, que foram criadas não possuem um valor atribuído receberão automaticamente o valor undefined**

Exemplos:

```javascript
var city;
```

A **variável** city receberá **undefined** automaticamente do **javaScript**

```javascript
var country = null;
```

Aqui **variável** country foi alterada para o valor **null**. 

Para facilitar pensem no **undefined** como ausência de valor e o **null** como vazio :)
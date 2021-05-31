---
slug: "/module-2/complex-types"
date: "2021-02-05"
title: "03 - Tipos de Dados Complexos"
id: 15
category: "module-2"
---

# Tipos Complexos (Arrays, Objects)

## Arrays

Arrays são coleções de dados onde podemos armazenar diversos tipos de informações. Geralmente são utilizados para armazenar listas (lista de todos os usuários de um site, lista de passagens, lista de produtos comprados pelo cliente) etc. No **JavaScript** os arrays são declarados da seguinte forma:

```javascript
let items = ["teclado gamer", "mouse gamer", "processador i9"];
```

Os **arrays** usam colchetes ([]) e cada item dentro do **array** é separado por vírgula (,).

Podemos inicializar um **array** vazio dessa forma:

```javascript
let items = [];
```

### Acessando os elementos

Os **arrays** permitem que o programador acesse um elemento individualmente. Isso é possível por que cada elemento possui uma posição específica dentro do **array**, vamos entender melhor:

Todo item dentro de um **array** pode ser acessado através do seu índice (posição). O **índice** é simplesmente um número que representa a ordem do item dentro do **array**, a primeira posição de um **array** é sempre 0 (zero).

Para acessar o item escrevemos da seguinte forma:

```javascript
// array[indice]
```

Na prática:

```javascript
let fruits = ["apples", "strawberries", "oranges", "blueberries", "peaches"];

console.log(fruits[0]) // -> "apples"
console.log(fruits[1]) // -> "strawberries"
console.log(fruits[2]) // -> "oranges"
console.log(fruits[3]) // -> "blueberries"
console.log(fruits[4]) // -> "peaches"

console.log(fruits[-1]) // -> undefined
console.log(fruits[5]) // -> undefined
```

Observação: Qualquer índice menor que zero ou maior do que o índice do último elemento retornarão **undefined**


### Manipulando arrays

O **JavaScript** possui uma série de métodos que auxiliam a manipulação de **arrays**. os mais usados são:

* push
* pop
* shift
* unshift
* slice

#### push

O método **push** adiciona um ou mais elementos no final do array:

```javascript
let items = ["teclado gamer", "mouse gamer", "processador i9"];

items.push("water cooler");

console.log(items) // -> ["teclado gamer", "mouse gamer", "processador i9", "water cooler"]
```

#### unshift

O método **unshift** adiciona um ou mais elementos no início do array:

```javascript
let items = ["teclado gamer", "mouse gamer", "processador i9"];

items.unshift("water cooler");

console.log(items) // -> ["water cooler", "teclado gamer", "mouse gamer", "processador i9"]
```

#### pop

O método **pop** remove o primeiro elemento do array:

```javascript
let items = ["teclado gamer", "mouse gamer", "processador i9"];

items.pop();

console.log(items) // -> ["mouse gamer", "processador i9"]
```

#### shift

O método **shift** remove o último elemento do array:

```javascript
let items = ["teclado gamer", "mouse gamer", "processador i9"];

items.shift();

console.log(items) // -> ["teclado gamer", "mouse gamer"]
```

#### slice

Com o método **slice** podemos cortar um **array**. Vamos ver um exemplo:

```javascript
let items = ["teclado gamer", "mouse gamer", "processador i9", "ssd 256gb", "ram ddr4"];

let myItems = items.slice(1, 4);

console.log(myItems) // -> ["mouse gamer", "processador i9", "ssd 256gb", "ram ddr4"];
```

No exemplo acima especificamos a posição inicial e final e um **novo array** será criado a partir do array original. O **slice** retorna um novo array sem alterar o original.



### Object

Os **objetos** são o coração do **JavaScript**, com ele podemos criar e organizar uma vasta quantidade de informações de forma clara e concisa.

#### Criando objetos

Para criar um objeto nós usamos uma par de chaves e atribuímos essas chaves a uma **variável** dessa forma:

```javascript
let pessoa = {};
```

```javascript
let dog = {};
```

```javascript
let car = {};
```

#### Chave / Valor

```javascript
let pessoa = {
    chave: "valor"
};
```

Os **objetos** trabalham usando um modelo de **chave** e **valor**. A **chave** é o nome usado para acessar o dado que chamamos de **valor**, notem que existem dois pontos separando a **chave** do **valor**:

```javascript
let dog = {
    name: "Falcão"
};
```

#### Acessando informações:

**Quando falamos de objetos em JavaScript os termos chave e propriedade são sinônimos :)**

Para acessar uma informação do **object** utilizamos o nome do object seguido de um (.) e o nome da **chave**. Quando fazemos isso o **JavaScript** retornará o **valor** correspondente à **chave** informada:

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}

console.log(pessoa.name) // -> Luan
```

#### Adicionando informações

Do mesmo modo que acessamos uma informação também podemos criar novas propriedades (**chave**) dentro de um objeto:

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}

pessoa.telefone = 123456789; // -> Como a propriedade telefone não existe no objeto ela será criada com o valor passado após o sinal de atribuição

pessoa.cidade = "Rio de Janeiro"; // -> Como a propriedade cidade não existe no objeto ela será criada com o valor passado após o sinal de atribuição

console.log(pessoa)
```

#### Apagando informações:

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}

delete pessoa.idade;

console.log(pessoa);
```






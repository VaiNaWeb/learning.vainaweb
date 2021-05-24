---
slug: "/backend/module-1/data-structures"
date: "2021-05-24"
title: "01 - Estruturas de Dados"
id: 1
category: "backend-module-1"
---

# Estruturas de Dados

## FAQ

### O que são estruturas de dados?

Estrutura de dados é uma organização, gerenciamento e armazenamento de dados em um formato que viabiliza acesso e modificação de forma eficiente. Mais precisamente, uma estrutura de dados é uma coleção de valores de dados, o relacionamento entre eles, e as funções e operações que podem ser aplicados aos dados.

### Por que é importante aprender Estruturas de Dados?

A todo tempo utilizamos estruturas de dados na programação. Algumas são usadas com mais frequência, outras em casos mais específicos. Fato é que as estruturas de dados foram criadas para facilitar a forma como trabalhamos com os mesmos e são otimizadas até o ultimo bit para extrair o máximo de performance possível.
Não é necessário que você conheça todas as estruturas de dados, mas é muito vantajoso que saiba trabalhar com as mais básicas, como arrays e objetos no JavaScript.

## Arrays

Arrays, são estruturas capazes de armazenar dados em uma espécie de lista. São chamados também de vetores por serem similares a vetores na matemática.
A seguir, alguns exemplos de arrays em várias linguagens:

#### C ou C++

Em C ou C++ devemos indicar o tipo de dado armazenado no array (int, string, char, etc). Também devemos dizer o tamanho do vetor para que o programa reserve exatamente aquele espaço de memória para o array, já que em C o programador tem total controle da alocação de memória.

```cpp
int vetor[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```

Caso você não saiba exatamente o tamanho que terá o array, é possível criá-lo sem especificar esta informação.

```cpp
int vetor2[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```

#### Go

Em go podemos criar arrays de duas formas:

1. Alocando memória e iniciando o array depois:

```go
var vetor [3]int
vetor[0] = 1
vetor[1] = 2
vetor[2] = 3
```

2. Iniciando diretamente o array:

```go
vetor := [3]int{1, 2, 3}
```

#### Python

Python trabalha com o conceito de listas, que fundamentalmente são a mesma coisa que array. As listas em python podem conter elementos de diversos tipos e a alocação de memória é feita dinâmicamente.

```python
lista = [0, 1, 2, "tres", 4, "cinco"]
```

#### JavaScript

Similarmente ao python, arrays em JavaScript podem ter tipos variados de dados e a linguagem é responsável por reservar a memória necessária:

```javascript
const lista = [0, 1, 2, "tres", 4, "cinco"]
```

> Neste curso iremos forcar em JavaScript e TypeScript. Logo, todos os exemplos à partir de agora serão nessas linguagens

## Operações com arrays

Veremos agora algumas operações possíveis com arrays em JavaScript.

### Concat

Concat é uma forma de juntar dois arrays em um. Ao utilizar a função concat, um novo array é retornado.

Exemplo:

```javascript
const array1 = [0, 1, 2]
const array2 = [3, 4, 5]
const array3 = array1.concat(array2) // [0, 1, 2, 3, 4, 5]
```

> Uma outra forma de fazer a junção de arrays é utilizando o spread operator.

Exemplo com spread operator:

```javascript
const array1 = [0, 1, 2]
const array2 = [3, 4, 5]
const array3 = [...array1, ...array2] // [0, 1, 2, 3, 4, 5]
```

### Join

Usar a função join em um array, o transformará em uma string. Você pode definir um separador para cada elemento do array.

Exemplo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const str = array.join(",") // note que o separador é a vírgula
console.log(str) // "0, 1, 2, 3, 4, 5"

const array2 = ["as", "três", "marias"]
const str2 = array2.join(" ") // o separador é um espaço
console.log(str2) // "as três marias"
```

### Pop e Shift

A função pop remove o último elemento de um array e retorna este elemento.

Exemplo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const ultimo = array.pop()
console.log(array) // [0, 1, 2, 3, 4]
console.log(ultimo) // 5
```

A função shift remove o primeiro elemento de um array e retorna este elemento.

Exemplo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const primeiro = array.shift()
console.log(array) // [1, 2, 3, 4, 5]
console.log(primeiro) // 0
```

### Push e Unshift

A função push adiciona um novo elemento ao final do array e retorna o seu tamanho.

Exemplo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const tamanho = array.push(6)
console.log(array) // [0, 1, 2, 3, 4, 5, 6]
console.log(tamanho) // 7
```

A função unshift adiciona um novo elemento ao início do array e retorna o seu tamanho.

Exemplo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const tamanho = array.unshift(6)
console.log(array) // [6, 0, 1, 2, 3, 4, 5]
console.log(tamanho) // 7
```

### ForEach

A função forEach irá iterar sobre todos os elementos de um array e aplicar uma função especificada pelo programador.

Neste exemplo iremos criar um novo array elevando todos os elementos de um dado array ao quadrado.

```javascript
const array = [0, 1, 2, 3, 4, 5]
const quadrados = []

function quadrado(numero) {
  // Eleva o número a potência 2 e adiciona o mesmo ao array de quadrados
  quadrados.push(Math.pow(numero, 2)) 
}

array.forEach(quadrado)

console.log(array) // [0, 1, 2, 3, 4, 5]
console.log(quadrados) // [0, 1, 4, 9, 16, 25]
```

Uma outra forma de alcançar o mesmo objetivo é criar a função na passagem de parâmetro para o forEach:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const quadrados = []

// Note que invés de criar a função anteriormente, já criamos como parâmetro do forEach
array.forEach(function (numero) {
  // Eleva o número a potência 2 e adiciona o mesmo ao array de quadrados
  quadrados.push(Math.pow(numero, 2)) 
})

console.log(array) // [0, 1, 2, 3, 4, 5]
console.log(quadrados) // [0, 1, 4, 9, 16, 25]
```

### Map

A função map similar ao forEach, itera sobre todos os elementos do array. Porém o map irá retornar um array de mesmo tamanho.

Usaremos o mesmo exemplo de elevar um número ao quadrado.

```javascript
const array = [0, 1, 2, 3, 4, 5]

function quadrado(numero) {
  // Retorna o número elevado à potência 2
  return Math.pow(numero, 2)
}

const quadrados = array.map(quadrado)

console.log(array) // [0, 1, 2, 3, 4, 5]
console.log(quadrados) // [0, 1, 4, 9, 16, 25]
```

Uma outra forma de alcançar o mesmo objetivo é criar a função na passagem de parâmetro para o map:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const quadrados = []

// Note que invés de criar a função anteriormente, já criamos como parâmetro do map
const quadrados = array.map(function (numero) {
  // Retorna o número elevado à potência 2
  return Math.pow(numero, 2)
})

console.log(array) // [0, 1, 2, 3, 4, 5]
console.log(quadrados) // [0, 1, 4, 9, 16, 25]
```

> Note que é importante que a função passada para o map sempre tenha um ***return***. Do contrário, o elemento não será modificado e você terá como resultado o array original.

### Reduce

A função reduce irá "reduzir" o array à um único elemento baseado na função passada como parâmetro.

Por exemplo, se quisermos fazer a média dos números em um array:

```javascript
const array = [0, 1, 2, 3, 4, 5]

/**
* Primeiro precisamos encontrar a soma de todos os elementos do array.
* Usaremos a função soma, que recebe o elemento anterior e o atual da função reduce
*/

function soma (anterior, atual) {
  return anterior + atual
}

/**
* Aplicamos a soma como parâmetro do reduce, o segundo parâmetro é o valor inicial.
*/

const total = array.reduce(soma, 0) // 15

/**
* Agora basta dividir o total pela quantidade de números no array
*/

const media = total / array.length

console.log(media) // 2.5
```

Assim como nas funções forEach e map, podemos também criar a função já como parâmetro do reduce:

```javascript
const array = [0, 1, 2, 3, 4, 5]

/**
* Primeiro precisamos encontrar a soma de todos os elementos do array.
* Aplicamos a soma como parâmetro do reduce a função que recebe o elemento anterior e o atual da função reduce e soma os mesmos
*/
const total = array.reduce(function (anterior, atual) {
  return anterior + atual
}, 0) // 15

/**
* Agora basta dividir o total pela quantidade de números no array
*/

const media = total / array.length

console.log(media) // 2.5
```

### Filter

A função filter irá percorrer o array e retornar todos os elementos que satisfaçam a condição da função passada por parâmetro.

Neste exemplo iremos buscar todos os números maiores que 3:

```javascript
const array = [0, 1, 2, 3, 4, 5]

function ehMaiorQueTres(numero) {
    return numero > 3
}

const maioresQueTres = array.filter(ehMaiorQueTres)

console.log(maioresQueTres) // [4, 5]
```

Criando a função na passagem de parâmetro:

```javascript
const array = [0, 1, 2, 3, 4, 5]

const maioresQueTres = array.filter(function (numero) {
    return numero > 3
})

console.log(maioresQueTres) // [4, 5]
```

## Objetos

### O que são objetos em JavaScript

O JavaScript trabalha com objetos de uma maneira bem única. Assim como os dicts (dicionários) em python, objetos no JavaScript nada mais são que um conjunto chave e valor.

Por exemplo, se quisermos salvar os dados do João:

```javascript
const dados = {
    //chave    valor
    nome:      "João",
    idade:     16,
    email:     "joão@ninguem.com"
}
```

Objetos podem conter outras estruturas de dados, como arrays e outros objetos:

```javascript
const dados = {
    //chave          valor
    nome:            "João",
    idade:           16,
    email:           "joão@ninguem.com",
                     // array como valor
    coresFavoritas:  ["azul", "vermelho", "rosa"],
                     // objeto como valor
    endereco:        {
                        //chave    valor
                        rua:       "Rua do Bobos"
                        numero:    0
                     }
}
```

Objetos podem também conter funções como valores:

```javascript
const Matematica = {
  soma: function (num1, num2) { return num1 + num2},
  sub: function (num1, num2) { return num1 - num2},
  mult: function (num1, num2) { return num1 * num2},
  div: function (num1, num2) { return num1 / num2},
}

console.log(Matematica.mult(2, 4)) // 8
```

## Métodos especiais da classe Object

A classe Object possui vários métodos especiais para lidar com objetos, alguns deles sendo:

### Object.keys

O método Object.keys retorna um array contendo as chaves de um objeto, por exemplo:

```javascript
const objeto = {
    nome: "Jõao",
  idade: 16,
}

const chaves = Object.keys(objeto)

console.log(chaves) // [nome, idade]
```

### Object.values

O método Object.values retorna um array contendoos valores de um objeto, por exemplo:

```javascript
const objeto = {
    nome: "Jõao",
  idade: 16,
}

const valores = Object.values(objeto)

console.log(valores) // ["João", 16]
```

### Object.entries

O método Object.entries retorna um array contendo arrays onde o primeiro elemento é a chave e o segundo elemento o valor. Por exemplo:

```javascript
const objeto = {
    nome: "Jõao",
  idade: 16,
}

const entradas = Object.entries(objeto)

console.log(entradas) // [["nome", "João"], ["idade", 16]]
```

### Object.fromEntries

O método Object.fromEntries faz o inverso do Object.entries, sendo assim, dado um array contendo contendo arrays onde o primeiro elemento é a chave e o segundo elemento o valor, um objeto será criado. Exemplo:

```javascript
const entradas = [["nome", "João"], ["idade", 16]]

const objeto = Object.fromEntries(entradas)

console.log(objeto) // {nome: "João", idade: 16}
```

### Object.assign

O método Object.assign recebe dois objetos e cria um novo objeto com todas as propriedades dos objetos recebidos. Exemplo:

```javascript
const dados = {
    nome: "Jõao",
  idade: 16,
}

const informacoesDeContato = {
    email: "joao@ninguem.com",
  telefone: "45988054596",
}

const dadosComContato = Object.assign(dados, informacoesDeContato)

console.log(dadosComContato)
// {nome: "Jõao", idade: 16, email: "joao@ninguem.com", telefone: "45988054596"}
```

O mesmo comportamento do Object.assign pode ser obtido ao usar o spread operator, como no exemplo a seguir: {.is-info}

```javascript
const dados = {
    nome: "Jõao",
  idade: 16,
}

const informacoesDeContato = {
    email: "joao@ninguem.com",
  telefone: "45988054596",
}

const dadosComContato = {
    ...dados,
  ...informacoesDeContato,
}

console.log(dadosComContato)
// {nome: "Jõao", idade: 16, email: "joao@ninguem.com", telefone: "45988054596"}
```

### Object.hasOwnProperty

O método hasOwnProperty verifica se o objeto possui a propriedade e retorna true ou false. Exemplo:

```javascript
const dados = {
    nome: "Jõao",
  idade: 16,
}

console.log(dados.hasOwnProperty("nome"))  // true
console.log(dados.hasOwnProperty("email")) // false
```

### Object.toString

O método toString irá retornar por padrão [object Object]. Porém, o mesmo pode ser reescrito a fim de obter-se uma string do objeto. Exemplo:

```javascript
const dados = {
    nome: "Jõao",
  idade: 16,
}

console.log(dados.toString()) // [object Object]

/**
 * Sobrescrevendo o método toString
 */

dados.toString = function() {
  return `Me chamo ${this.nome} e tenho ${this.idade} anos.`
}

console.log(dados.toString()) // Me chamo Jõao e tenho 16 anos.
```

## Imutabilidade

### O que é imutabilidade?

Imutabilidade é um paradigma de programação, usado principalmente em JavaScript, onde objetos e arrays se tornam imutáveis. Sendo assim, um array ou objeto não pode ser alterado diretamente ou sobrescrito, um novo objeto ou array deve ser criado com as modificações necessárias.

### Por que aplicar este princípio?

Este princípio é usado para prevenir bugs, facilitar testes e compreensão do código. Ajuda também a evitar erros quando programando em equipe.
Podemos aplicar imutabilidade através de bibliotecas como o <a href="https://immutable-js.github.io/immutable-js/" target="_blank">Immutable.js</a>. Ou também usando ferramentas da própria linguagem.

### Imutabilidade em arrays

Durante este capítulo, vimos que é possível adicionar, remover e alterar elementos de um array por meio de funções disponíveis na linguagem, como: pop, shift, push e unshift. Ao usar este tipo de função, estamos alterando diretamente o array e mudando seus valores em memória.

Quando modificamos um array diretamente, perdemos a referência de memória do array original, o que torna difícil "debugar" o código, ou mesmo testar. De acordo com o princípio da imutabilidade, não devemos alterar o array original para não perdermos a referência. Devemos criar um novo array, atribuindo à este os valores do array original, para então podermos alterar os dados com a garantia de que preservamos a informação original.

#### Aplicando imutabilidade em arrays

Vamos adicionar um elemento ao array, aplicando imutabilidade. As regras são as seguintes:

1. O array original tem de se manter intacto
2. Um novo array deve ser criado com o novo elemento


#### Exemplo 1 - Adicionando um elemento ao *fim* do array

Exemplo **sem imutabilidade**:

```javascript
const array = [0, 1, 2, 3, 4, 5]
array.push(6)
console.log(array) // [0, 1, 2, 3, 4, 5, 6]
```
> O array original foi modificado, logo não é imutável.

Podemos usar a função concat para fazer a concatenação dos dados e retornar um novo array:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const novoArray = array.concat([6])
console.log(novoArray) // [0, 1, 2, 3, 4, 5, 6]
```

> Apesar de podermos usar concat, a melhor forma atualmente é utilizar o spread operator como no exemplo abaixo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const novoArray = [...array, 6]
console.log(novoArray) // [0, 1, 2, 3, 4, 5, 6]
```

#### Exemplo 1 - Adicionando um elemento ao *início* do array

Exemplo **sem imutabilidade**:
```javascript
const array = [0, 1, 2, 3, 4, 5]
array.unshift(6)
console.log(array) // [6, 0, 1, 2, 3, 4, 5]
```

> O array original foi modificado, logo não é imutável.

Podemos usar a função concat para concatenar o array original ao novo array:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const novoArray = [6].concat(array)
console.log(novoArray) // [6, 0, 1, 2, 3, 4, 5]
```

> Apesar de podermos usar concat, a melhor forma atualmente é utilizar o spread operator como no exemplo abaixo:

```javascript
const array = [0, 1, 2, 3, 4, 5]
const novoArray = [6, ...array]
console.log(novoArray) // [6, 0, 1, 2, 3, 4, 5]
```

#### E se quisermos alterar um elemento do array?

Vamos modificar o quarto elemento do array (posição 3), substituindo o valor `3` por `45`.

Podemos usar as funções slice e concat para criar cópias do array e modificar o elemento desejado:

```javascript
const array = [0, 1, 2, 3, 4, 5]

const novoArray = array.slice(0, 3).concat(45).concat(array.slice(4))

console.log(novoArray) // [0, 1, 2, 45, 4, 5]
```

Usando spread operator:

```javascript
const array = [0, 1, 2, 3, 4, 5]

const novoArray = [...array.slice(0, 3), 45, ...array.slice(4)]

console.log(novoArray) // [0, 1, 2, 45, 4, 5]
```

### Imutabilidade em objetos

As regras para imutabilidade de objetos são as mesmas dos arrays:
1. O objeto original deve ser preservado.
2. Um novo objeto deve ser criado, com as propriedades modificadas.

#### Adicionando ou removendo dados de um objeto

Dado o objeto:

```javascript
const dados = {
    nome: "João",
  idade: 16,
}
```

#### Vamos adicionar o email ao objeto.

#### Sem aplicar imutabilidade:

```javascript
const dados = {
    nome: "João",
  idade: 16,
}

dados["email"] = "joão@ninguem.com"

console.log(dados) // {nome: "João", "idade": 16, email: "joão@ninguem.com"}
```

#### Aplicando imutabilidade de forma clássica:

```javascript
const dados = {
    nome: "João",
  idade: 16,
}

const dadosModificados = {
    nome: dados.nome,
  idade: dados.idade,
  email: "joão@ninguem.com"
}

console.log(dadosModificados) // {nome: "João", "idade": 16, email: "joão@ninguem.com"}
```

#### Aplicando imutabilidade usando a função Objetct.assign.

A função Object.assign irá criar um novo objeto com as propriedades dos dois objetos passados como parâmetro.

```javascript
const dados = {
    nome: "João",
  idade: 16,
}

const informacoesDeContato = {
  email: "joão@ninguem.com"
}

const dadosModificados = Object.assign(dados, informacoesDeContato)

console.log(dadosModificados) // {nome: "João", "idade": 16, email: "joão@ninguem.com"}

/**
* Note que também é possível criar o objeto na chamada da função
*/

const dadosModificados2 = Object.assign(dados, {
    email: "joão@ninguem.com"
})
```

#### Aplicando imutabilidade usando spread operator:

```javascript
const dados = {
    nome: "João",
  idade: 16,
}

const dadosModificados = {
    ...dados,
  email: "joão@ninguem.com"
}

console.log(dadosModificados) // {nome: "João", "idade": 16, email: "joão@ninguem.com"}
```

#### Dado o objeto:

```javascript
const dados = {
    nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}
```

#### Vamos remover a propriedade idade do objeto.

#### Sem aplicar imutabilidade:

```javascript
const dados = {
  nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}

delete dados.idade

console.log(dados) // {nome: "João", email: "joão@ninguem.com"}
```

#### Aplicando imutabilidade de forma clássica:

```javascript
const dados = {
  nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}

const dadosModificados = {
  nome: dados.nome,
  email: dados.email
}

console.log(dadosModificados) // {nome: "João", email: "joão@ninguem.com"}
```

### Aplicando imutabilidade usando desestruturação de objetos:

```javascript
const dados = {
    nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}

const {nome, email} = dados

const dadosModificados = {
  nome,
  email
}

console.log(dadosModificados) // {nome: "João", email: "joão@ninguem.com"}
```

#### Modificando os dados de um objeto

#### Vamos mudar a propriedade idade do objeto a seguir:

```javascript
const dados = {
    nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}
```

#### Sem aplicar imutabilidade

```javascript
const dados = {
    nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}

dados.idade = 37

console.log(dados) // {nome: "João", "idade": 37, email: "joão@ninguem.com"}
```

### Aplicando imutabilidade de forma clássica

```javascript
const dados = {
    nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}

const dadosModificados = {
    nome: dados.nome,
  idade: 37,
  email: dados.email
}

console.log(dadosModificados) // {nome: "João", "idade": 37, email: "joão@ninguem.com"}
```

#### Aplicando imutabilidade com spread operator

```javascript
const dados = {
    nome: "João",
  idade: 16,
  email: "joao@ninguem.com",
}

const dadosModificados = {
    ...dados,
  idade: 37
}

console.log(dadosModificados) // {nome: "João", "idade": 37, email: "joão@ninguem.com"}
```

### Por fim

Podemos aplicar imutabilidade de várias formas para garantirmos a integridade dos dados originais. Voce pode escolher a forma como aplicar, desde que aplique. Pois este paradigma evita bugs, facilita testes e a compreensão do código.

> Obs: A forma como aplicamos imutabilidade aqui, não contém todos os conceitos como aplicados na biblioteca <a href="https://immutable-js.github.io/immutable-js/" target="_blank">Immutable.js</a>.

## Conclusão
Ao fim deste capítulo, esperamos que você tenha entendido bem como usar arrays e objetos em JavaScript, pois são as estruturas de dados mais básicas da linguagem e as mais utilizadas.

## Referências

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">Objetos - JavaScript | MDN</a>.
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">Arrays - JavaScript | MDN</a>.
- <a href="https://immutable-js.github.io/immutable-js/" target="_blank">Immutable.js</a>.
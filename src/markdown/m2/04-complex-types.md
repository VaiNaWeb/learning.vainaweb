---
slug: "/module-2/complex-types"
date: "2021-02-05"
title: "03 - Tipos de Dados Complexos"
id: 15
category: "module-2"
---

### Array

Array é uma lista, que pode guardar todos os tipos de dados, geralmente utilizamos um mesmo tipo de dado em cada array.

Ex Array de strings:
```javascript
let arr = ["item", "item", "item"];
```

Ex Array de Numbers:
```javascript
let arr = [1, 2, 3, 4, 5];
```


### Object

Object é uma coleção de propriedades, que pode receber vários tipos de dados.

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}
```

Para acessar uma propriedade do Object utilizamos o nome do object seguido de um (.):

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}

console.log(pessoa.amigos)
```

Adicionando uma nova propriedade ao Object:

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}

pessoa.telefone = 123456789

console.log(pessoa)

```

Removendo uma propriedade do Object:

```javascript
let pessoa = {
    nome: "Luan",
    idade: 17,
    amigos: ["Kelvin", "Kraken", "Cícero"]
}

delete pessoa.idade

console.log(pessoa)

```






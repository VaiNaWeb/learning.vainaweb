---
slug: "/module-2/loops"
date: "2021-02-05"
title: "04 - Loops"
id: 16
category: "module-2"
---

### Loops FOR / WHILE

Loops são laços de repetição que podem executar uma ação diversas vezes.

### Loop FOR:

Este tipo de loop geralmente é usado quando você quer uma quantidade finita e conhecida de repetições.


Exemplo 1 utilizando FOR:

```javascript
for(let i = 0; i <= 10; i++){
    console.log(i);
}
```

Exemplo 2 utilizando FOR:

```javascript
for(let i = 10; i >= 0; i--){
    console.log(i);
}
```

### Loop WHILE:

Este tipo de loop geralmente é usado quando você não sabe a quantidade total de repetições que precisará iterar o código.

Exemplo de como escrever um loop WHILE:


Exemplo utilizando WHILE para contar números de 0 até 10:

```javascript
let i = 0;

while(i <= 10){
    console.log(i);
    i++;
}
```

Exemplo utilizando WHILE para contar números de 10 até 0:

```javascript
let i = 10;

while(i >= 0){
    console.log(i)
    i--;
}
```

![loop](https://media.giphy.com/media/MDXomrcGshGso/giphy.gif)

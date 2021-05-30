---
slug: "/module-2/conditionals"
date: "2021-02-05"
title: "03 - Condições"
id: 14
category: "module-2"
---

# Condições (If/Else)

Muitas vezes precisamos fazer nosso código tomar decisões, Isso é feito através da estrutura condiconal **if/else**. Com essa estrutura conseguimos executar um pedaço de código caso uma determinada condição seja verdadeira (**true**).

Vamos ao nosso primeiro exemplo:

```javascript
var iAmHuman = true;

if (iAmHumam) {
  console.log('Olá Mundo!!!');
}
```

O bloco de código (todo o código dentro das chaves) da condição será executado caso o valor da váriavel **iAmHumam** seja verdadeiro (**true**).

Outro exemplo: 

```javascript
var isWeekend = true;

if (isWeekend) {
  console.log('Piscina!!!');
}
```

## Else

Vimos no exemplo acima que o código será executado caso a condição seja verdadeira, e se não for esse o caso? Como poderíamos fazer nosso código ir por outro caminho e executar outro código caso o valor testado seja falso (**false**)?

```javascript
var isWeekend = false;

if (isWeekend) {
  console.log('Piscina!!!');
} else {
  console.log('Estudar JavaScript!!!')
}
```

No exemplo acima nós adicionamos um segundo bloco de código usando o **else**. Ele serve como um backup para o **if**, se a condição não passar no teste do **if** o bloco de código do **else** será automáticamente executado.

Outro exemplo:

```javascript
var isStudent = false;

if (isStudent) {
  console.log('Ir para escola!!!');
} else {
  console.log('Trabalhar!!!')
}
```

### Operadores Lógicos

Podemos fazer testes mais complexos nas nossas condições usando os **operadores lógicos**:

* > - Maior que
* < - Menor que
* >= Maior ou igual que
* <= Menor ou igual que
* === Igual à
* !== Diferente de

```javascript
var age = 25;

// Apenas números maiores que 18 vão tornar a condição verdadeira
if (age > 18) {
  console.log('Você pode aprender a dirigir');
}
```

```javascript
var age = 25;

// Apenas números maiores ou igual a 18 vão tornar a condição verdadeira
if (age >= 18) {
  console.log('Você pode aprender a dirigir');
}
```

```javascript
var age = 25;

// Apenas números menores a 16 vão tornar a condição verdadeira
if (age < 16) {
  console.log('Você não pode votar!!!');
}
```

```javascript
var day = 'sunday';

// Notem que letras maiúsculas são diferentes de minúsculas
if (day === 'sunday') {
  console.log('Vamos pra piscina!!!');
}
```

```javascript
var day = 'sunday';

// Essa condição é falsa. sunday é diferente de SUNDAY
if (day === 'SUNDAY') {
  console.log('Vamos pra piscina!!!');
}
```
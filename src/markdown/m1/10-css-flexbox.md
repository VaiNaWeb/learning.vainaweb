---
slug: "/module-1/css-flexbox"
date: "2021-02-05"
title: "10 - CSS: Flexbox"
id: 10
category: "module-1"
---


# 10 - CSS: Flexbox

O flexbox é a primeira tecnologia do **css** pensada para os layouts da web moderna, diferente das técnicas antigas \(float, inline-block, position\) ele traz a flexibilidade e a robustez necessária para se criar layouts complexos com mais facilidade.

## Ativando o flexbox!

Para ativar o flexbox em algum elemento na página nós usamos a propriedade display:

```css
.container {
  display: flex;
}
```

A partir desse momento todos os filhos dessa classe irão se comportar como **flex items** \(falaremos sobre eles abaixo\).

## Entendendo as direções!

Após a ativação do **flexbox** nós podemos configurar algumas opções no nosso container. Vamos começar pela direção:

Nós podemos modificar a direção dos items usando a propriedade **flex-direction**, assim podemos dizer se queremos os items em linha ou em coluna. Podemos usar as seguintes opções:

* **row** \(será usada caso não seja especificado nenhuma direção\)
* **column**
* **row-reverse**
* **column-reverse**

![flexbox - flex direction](https://raw.githubusercontent.com/VaiNaWeb/gitbook-assets/master/modulo-1/images/flex-direction.png)

## Eixo principal!

Após especificarmos a direção do nosso container, usando o **flex-direction**, nós podemos alinhar os items nessa direção usando a propriedade **justify-content**. Temos as seguintes opções:

* **flex-start**
* **flex-end**
* **center**
* **space-around**
* **space-between**
* **space-evenly**

![flexbox - main axis](https://raw.githubusercontent.com/VaiNaWeb/gitbook-assets/master/modulo-1/images/flexbox-main-axis.png)

## Eixo secundário!

Diferente do **justify-content** a propriedade **align-items** é usada para alinhar os items na direção perpendicular à direção do container. Temos as seguintes opções:

* **flex-start**
* **flex-end**
* **center**
* **stretch**
* **baseline**

![flexbox - cross axis](https://raw.githubusercontent.com/VaiNaWeb/gitbook-assets/master/modulo-1/images/flexbox-cross-axis.png)


---
postFormat: 'standard'
title: '¿Como centrar un div en CSS?'
metaDescription: 'Para hacerlo debemos asignar la propiedad display: flex, justify-content: center y align-items: center al contenedor.'
alternativeHeadline: 'Centrar elemento con CSS'
dependencies: 'Conocimientos basicos de desarrollo web'
proficiencyLevel: 'Principiante'
keywords: 'CSS, HTML, Centrar div, Centrar elemento'
date: '2023/01/16'
lastMod: '2023/01/16'
featuredImage: '/images/posts/centrar-div.png'
featuredImageAlt: 'Centrar div'
authorName: 'Daniel Alexis Gonzalez Perez'
authorImage: 'https://avatars.githubusercontent.com/u/54653600?v=4'

---

Centrar un elemento en CSS como un div, es una de las cosas mas comunes que se hacen al momento de desarrollar una pagina web, aunque no parece ser tan complicado, muchas veces puede resutar ser una tarea dificil si vamos iniciando en el mundo del desarrollo web. Por eso en este articulo te mostraremos como es que se puede centrar un div con CSS de manera rapida y sencilla.

## ¿Como centrar div horizontalmente?

Inicaremos con el caso mas comun, centrar un div horizontalmente. Para este existen bastantes alternativas, la mayoria de ellas son sencillas de implementar, sin embargo dependiendo de la situacion en la que nos encontremos, una alternativa puede ser mas conveniente que otra. Aqui te mostramos cuales pueden ser las formas mas comunes de centrar un div horizontalmente.

### Con margin auto

La propiedad margin auto es una de las formas mas utilizadas, sencillas y aceptadas por los navegadores para centrar un div horizontalmente. Cuando nosotros le asignamos el valor auto a la propiedad margin, le estamos diciendo al navegador que el margen de ese elemento debe ser igual entre los dos lados. Por lo tanto, si nosotros le asignamos el valor auto a la propiedad margin de un elemento, este se centrara en el centro de su contenedor. 

A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="elemento-centrado">
        <p>Margin auto</p>
    </div>
```

```css
    .elemento-centrado {
        margin: 0 auto;
        width: 300px; /* El div debe tener un ancho especifico */
        height: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
    }
```

El resultado de este codigo seria el siguiente:

![Div centrado horizontalmente con margin auto](/images/posts/div-centrado-margin-auto.png)

Como puedes ver en el ejemplo anterior, indicamos 2 valores para la propiedad margin, el primero es 0, que indica que no queremos margen en la parte superior e inferior del elemento, y el segundo es auto, que indica que queremos que el margen sea igual entre la derecha y izquierda del elemento.

**Requerimientos para utilizar este metodo:**

- El div debe tener un ancho especifico, ya que si no se le asigna un ancho, el navegador no sabra que margen debe asignarle a cada lado del elemento.

### Con flexbox

Flexbox es un sistema de elementos flexibles, que nos permite centrar elementos horizontal y verticalmente si lo deseamos, en este caso, para centrar un div horizontalmente. Las propiedades que debemos utilizar son display: flex y justify-content: center. A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="contenedor">
        <div class="elemento-centrado">
            <p>Este es un div centrado horizontalmente con flexbox</p>
        </div>
    </div>
```

```css
    .contenedor {
        display: flex;
        justify-content: center;
    }
    .elemento-centrado {
        width: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        height: 300px; /* Propiedad no necesaria */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
    }
```

El resultado de este codigo seria el siguiente:

![Div centrado horizontalmente con flexbox](/images/posts/div-centrado-flexbox.png)

Como puedes ver en el ejemplo anterior, asignamos la propiedad display:flex y justify-content:center al contenedor, y el div se centrara horizontalmente.

**Requerimientos para utilizar este metodo:**
Para hacer uso de la propiedad justify-content, el contenedor debe tener la propiedad display:flex obligatoriamente.

### Con grid

Grid es un sistema de elementos en cuadricula, que nos permite tambien centrar elementos de forma horizontal si asi lo deseamos. Para centrar nuestro div de forma horizontal es bastante parecido a lo que hicimos con flexbox. Debes asignar la propiedad display: grid y la propiedad justify-items: center al contenedor. A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="contenedor">
        <div class="elemento-centrado">
            <p>Este es un div centrado horizontalmente con grid</p>
        </div>
    </div>
```

```css
    .contenedor {
        height: 100vh; /* Propiedad no necesaria, solo para el ejemplo */
        display: grid;
        justify-items: center;
    }
    .elemento-centrado {
        width: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        height: 300px; /* Propiedad no necesaria */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
    }
```

El resultado de este codigo seria el siguiente:

![Div centrado horizontalmente con grid](/images/posts/div-centrado-grid.png)

Como puedes ver en el ejemplo anterior, asignamos la propiedad display:grid y justify-items:center al contenedor, y el div se centrara horizontalmente.

### Con position absolute

La propiedad position absolute tambien es una de las formas mas utilizadas, pero a diferencia de las otras propiedades, no siempre es correcto usarla si queremos seguir buenas practicas de desarrollo. La propiedad position absolute, nos permite posicionar un elemento en cualquier parte de nuestro documento, pero para centrar un elemento horizontalmente, debemos asignarle la propiedad left: 50% y tambien transform: translateX(-50%). A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="elemento-centrado">
        <p>Este es un div centrado horizontalmente con position absolute</p>
    </div>
```

```css
    .elemento-centrado {
        width: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        height: 300px; /* Propiedad no necesaria */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
```

El resultado de este codigo seria el siguiente:

![Div centrado horizontalmente con position absolute](/images/posts/div-centrado-position-absolute.png)

Como puedes ver en el ejemplo anterior, asignamos la propiedad position:absolute, left:50% y transform:translateX(-50%) al elemento, y el div se centrara horizontalmente.

## ¿Como centrar div verticalmente?

El caso siguiente es un poco mas complicado, el centrar un div verticalmente puede ser un poco mas dificil que centrarlo horizontalmente, pero no imposible. Para centrar un div verticalmente hay varios metodos, a continuacion te mostramos algunos.

### Con flexbox

Este metodo a mi parecer es el mas sencillo, mas recomendado y moderno para centrar un div verticalmente. Para hacerlo debemos asignar la propiedad display: flex y align-items: center al contenedor. A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="contenedor">
        <div class="elemento-centrado">
            <p>Este es un div centrado verticalmente con flexbox</p>
        </div>
    </div>
```

```css
    .contenedor {
        height: 100vh; /* Propiedad no necesaria, solo para el ejemplo */
        display: flex;
        align-items: center;
    }
    .elemento-centrado {
        width: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        height: 300px; /* Propiedad no necesaria */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
    }
```

El resultado de este codigo seria el siguiente:

![Div centrado verticalmente con flexbox](/images/posts/div-centrado-vertical-flexbox.png)

Como puedes ver en el ejemplo anterior, asignamos la propiedad display:flex y align-items:center al contenedor, y el div se centrara verticalmente.

**Requerimientos para utilizar este metodo:**

- Para hacer uso de la propiedad align-items, el contenedor debe tener la propiedad display:flex obligatoriamente.x

## ¿Como centrar div horizontal y verticalmente?

Una vez explicado como centrar un div horizontalmente y verticalmente por separado, ahora te mostraremos como hacerlo a la vez. A continuacion te mostramos varios metodos para centrar un div horizontal y verticalmente.

### Con flexbox

Este metodo es el mas sencillo y recomendado para centrar un div horizontal y verticalmente. Para hacerlo debemos asignar la propiedad display: flex, justify-content: center y align-items: center al contenedor. A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="contenedor">
        <div class="elemento-centrado">
            <p>Este es un div centrado horizontal y verticalmente con flexbox</p>
        </div>
    </div>
```

```css
    .contenedor {
        height: 100vh; /* Propiedad no necesaria, solo para el ejemplo */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .elemento-centrado {
        width: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        height: 300px; /* Propiedad no necesaria */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
    }
```

El resultado de este codigo seria el siguiente:

![Div centrado horizontal y verticalmente con flexbox](/images/posts/div-centrado-h-v-flexbox.png)

Como puedes ver en el ejemplo anterior, asignamos la propiedad display:flex, justify-content:center y align-items:center al contenedor, y el div se centrara horizontal y verticalmente.

**Requerimientos para utilizar este metodo:**

- Para hacer uso de la propiedad justify-content, el contenedor debe tener la propiedad display:flex obligatoriamente.

### Con position absolute

Para hacer uso de este metodo debemos asignar la propiedad position: absolute, top: 50%, left: 50%, transform: translate(-50%, -50%) al elemento. A continuacion te mostramos un ejemplo de como se puede utilizar esta propiedad.

```html
    <div class="contenedor">
        <div class="elemento-centrado">
            <p>Este es un div centrado horizontal y verticalmente con position absolute</p>
        </div>
    </div>
```

```css
    .contenedor {
        height: 100vh; /* Propiedad no necesaria, solo para el ejemplo */
        position: relative;
    }
    .elemento-centrado {
        width: 300px; /* Propiedad no necesaria, solo para el ejemplo */
        height: 300px; /* Propiedad no necesaria */
        background-color: red; /* Propiedad no necesaria */
        border: 1px solid black; /* Propiedad no necesaria */
        color: white; /* Propiedad no necesaria */
        font-size: 40px; /* Propiedad no necesaria */
        font-weight: bold; /* Propiedad no necesaria */
        text-align: center; /* Propiedad no necesaria */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
```

El resultado tendria que ser el siguiente:

![Div centrado horizontal y verticalmente con position absolute](/images/posts/div-centrado-h-z-absolute.png)

Como puedes ver en el ejemplo anterior, asignamos la propiedad position:absolute, top:50%, left:50% y transform:translate(-50%, -50%) al elemento, y el div se centrara horizontal y verticalmente.

### Conclusiones

Como puedes ver, existen varias formas de centrar un div horizontal y verticalmente. En este articulo te hemos mostrado los metodos mas sencillos y recomendados para centrar un div horizontal y verticalmente. Esperamos que este articulo te haya sido de utilidad.
---
postFormat: 'standard'
title: '¿Qué es Javascript y para qué sirve?'
metaDescription: 'Javascript es un lenguaje de programacion de alto nivel disenado para crear paginas web dinamicas y aplicaciones web. A diferencia de otros lenguajes de programacion, este no fue disenado para ser un lenguaje compilado, sino para ser interpretado por nuestros navegadores web.'
alternativeHeadline: '¿Para que sirve javascript?'
dependencies: 'Conocimientos basicos de desarrollo web'
proficiencyLevel: 'Principiante'
keywords: 'Javascript, desarrollo web, web, programacion'
date: '2023/01/13'
lastMod: '2023/01/13'
featuredImage: '/images/posts/javascript-frameworks.png'
featuredImageAlt: 'Javascript frameworks'
authorName: 'Daniel Alexis Gonzalez Perez'
authorImage: 'https://avatars.githubusercontent.com/u/54653600?v=4'

---
## ¿Qué es Javascript?

Javascript es un lenguaje de programacion de alto nivel disenado para crear paginas web dinamicas y aplicaciones web. A diferencia de otros lenguajes de programacion, este no fue disenado para ser un lenguaje compilado, sino para ser interpretado por nuestros navegadores web. Aunque Javascript inicialmente fue utilizado para agregar interactividad y dinamismo a las paginas web, hoy en dia es utilizado para todo tipo de proyectos, aplicaciones web, aplicaciones moviles, servidores, etc.

### Historia de Javascript

En 1995, Brendan Eich, ingeniero de Netscape desarrollo el lenguaje Mocha, el cual fue renombrado a LiveScript y posteriormente a Javascript. Este nombre dio paso a confusiones, ya que muchos pensaban que Javascript era una prolongacion de Java. Su objetivo principal era proporcionar dinamismo a las paginas sin la necesidad de recargarlas, asi que cuando Netscape lanzo la version 2.0 de su navegador, se incluyo el lenguaje Javascript pero no fue hasta 1997 que Javascript fue adoptado como un estandar ECMA (European Computer Manufacturers Association) y con el nombre de ECMAScript.

### Caracteristicas de Javascript

- **Lenguaje de programacion interpretado:**
    La diferencia entre un lenguaje compilado y uno interpretado es que el primero se convierte a codigo maquina antes de ser ejecutado, mientras que el segundo es ejecutado tal cual como esta escrito directamente en este caso por el navegador web. Esto trae como ventaja que no es necesario tener que esperar a que el codigo sea compilado para poder ejecutarlo, si no que podemos verlo en tiempo real en nuestro navegador.

- **Tipado dinamico:**
    Lenguaje de tipado dinamico ¿que significa esto? significa que no hace falta declarar el tipo de dato que va a contener una variable, javascript lo infiere automaticamente. Aunque esto puede hacer que nuestro codigo se vea mas limpio y corto, tambien puede traer problemas si no tenemos cuidado, ya que puede traer errores que son dificiles de detectar.

- **Multi paradigma:**
    Javascript es un lenguaje multi paradigma, esto quiere decir que podemos utilizar diferentes paradigmas de programacion en el mismo codigo, como por ejemplo la programacion orientada a objetos, la programacion imperativa o la programacion funcional que se basa en encapsular codigo en funciones para poder reutilizarlo y tener un codigo mas limpio.

- **Versatil:**
    Javascript tiene una gran versatilidad. Debido a la gran cantidad de frameworks y librerias creados por la comunidad que existen para este lenguaje, podemos utilizarlo para crear aplicaciones web, aplicaciones moviles, servidores, etc.

## ¿Para que sirve Javascript?
Como mencionamos anteriormente, Javascript se utiliza para crear paginas web dinamicas, pero debido a la gran comunidad que existe alrededor de este lenguaje, podemos utilizarlo para crear todo tipo de proyectos, desde aplicaciones web, aplicaciones moviles, servidores, etc. A continuacion te mostramos algunos ejemplos de proyectos que puedes crear con Javascript.

- **Aplicaciones web:**
    El uso mas comun que se le da a Javascript es para la creacion de aplicaciones web. Al ser el unico lenguaje de programacion que puede ser interpretado por los navegadores web, se usa en la mayoria de proyectos web, por no decir todos. Algunos frameworks o librerias muy populares que se utilizan para este fin son React, Angular, Vue, etc.

- **Aplicaciones moviles:**
    Javascript tambien es utilizado para crear aplicaciones moviles, ya que tenemos frameworks como React Native que nos permiten desarrollar aplicaciones moviles que se ejecutan en dispositivos Android y IOS sin necesidad de tener que crear dos aplicaciones diferentes.

- **Servidores:**
    Otra de las grandes ventajas de Javascript es el uso que se le puede dar a este lenguaje en el backend. El uso de NodeJS crea un entorno de ejecucion de Javascript en nuestro servidor y nos permite usarlo en el backend.

- **Inteligencia artificial:**
    A pesar de que Javascript no fue disenado con este objetivo. Gracias a su comunidad podemos utilizarlo para crear inteligencia artificial. Una de las librerias mas populares para este fin es TensorflowJS.

Estos son solo algunos ejemplos en que podemos usar Javascript, pero como puedes ver, la versatilidad que este lenguaje nos provee es muy grande.

## Sintaxis de Javascript

### Variables
Las variables son contenedores que nos permiten almacenar datos. En el caso de javascript al ser un lenguaje de tipado dinamico, no es necesario que declaremos el tipo de dato que va a contener la variable, javascript por si solo lo infiere. A continuacion te mostramos como declarar una variable en javascript.

```js
let nombre = "Daniel";
```

En este ejemplo, estamos declarando una varibale llamada nombre y le estamos asignando el valor "Daniel". Como puedes ver, no estamos declarando el tipo de dato que va contener la variable, simplemente asignamos el valor y javascript infiere que en este caso es una cadena de texto (string).

### Tipos de datos

- **Undefined:**
    Este tipo de dato como su nombre lo indica se utiliza para representar un valor que no ha sido definido. Por ejemplo, si declaramos una variable y a esta no le asignamos ningun valor javascript la considera como undefined. Ejemplo:

    ```js
    let nombre;
    console.log(nombre); // undefined
    ```

- **Null:**
    El tipo de dato null representa un valor nulo, que no existe. Atencion, no es lo mismo que el tipo de dato undefined, ya que hay una diferencia entre un valor no definido y un valor nulo. Ejemplo:

    ```js
    let nombre = null;
    console.log(nombre); // null

    let apellido;
    console.log(apellido); // undefined
    ```

- **Boolean:**
    El tipo de dato mas simple que existe, en los valores booleanos solo existen dos posibles valores, true o false. Ejemplo:

    ```js
    let esEstudiante = true;
    console.log(esEstudiante); // true
    ```

- **Number:**
    Otro tipo de dato muy comun, este tipo de dato representa un numero, ya sea entero o decimal. Ejemplo:

    ```js
    let precio = 99.99;
    console.log(precio); // 99.99
    ```
- **BigInt:**
    El tipo de dato BigInt representa un numero entero de cualquier tamaño.

- **String:**
    Los strings son cadenas de texto, o lo que es lo mismo, palabras o frases. Ejemplo:

    ```js
    let texto= "Hola mundo";
    console.log(texto); // Hola mundo
    ```

- **Symbol:**
    Este tipo de dato es unico. Nos permite obtener un valor unico que no se puede repetir. Ejemplo:

    ```js
    let simbolo = Symbol("mi simbolo");
    console.log(simbolo); // Symbol(mi simbolo)
    ```

- **Object:**
    Uno de los tipos de datos mas importantes, este tipo de dato representa un objeto. ¿Pero que es un objeto? un objeto es una entidad con una coleccion de propiedades, las cuales cada una de ellas tiene un valor asociado. Ejemplo:

    ```js
    let empleado = {
        nombre: "Paco",
        edad: 28,
        esEstudiante: false
    }
    console.log(empleado); // {nombre: "Paco", edad: 28, esEstudiante: false}
    ```

### Ejemplos de codigo en Javascript

- **Suma de dos numeros:**
    A continuacion te mostramos un ejemplo de como sumar dos numeros en Javascript. En esta ocasion vamos a hacer uso de una funcion para realizar la suma.

    ```js
    function sumar(a, b) {
        return a + b;
    }

    console.log(sumar(2, 3)); // 5

    //Sin usar una funcion
    let resultado = 2 + 3;
    console.log(resultado); // 5
    ```

- **Obtener el area de un circulo:**
    A continuacion te mostramos un ejemplo de como obtener el area de un circulo en Javascript. En esta ocasion vamos a hacer uso de una funcion para realizar la suma.

    ```js
    function areaCirculo(radio) {
        return Math.PI * Math.pow(radio, 2);
    }

    console.log(areaCirculo(2)); // 12.566370614359172

    //Sin usar una funcion
    let area = Math.PI * Math.pow(2, 2);
    console.log(area); // 12.566370614359172
    ```


En conclusion, Javascript es un lenguaje de programacion muy versatil y facil de aprender. Tiene grandes ventajas tanto en su uso en el frontenda asi como en el backend. Espero este articulo te haya sido de utilidad para aprender un poco mas sobre este lenguaje de programacion tan popular hoy en dia.
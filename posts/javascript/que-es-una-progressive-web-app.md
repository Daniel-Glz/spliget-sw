---
postFormat: 'standard'
title: 'Que es una Progressive Web App (PWA)'
metaDescription: 'Una Progressive Web App es una nueva forma de aplicaciones basadas en los estandares web fusionando las ventajas de las aplicaciones nativas con las de las aplicaciones web.'
alternativeHeadline: 'Progressive Web App'
dependencies: 'HTML, CSS, JavaScript'
proficiencyLevel: 'Intermedio'
keywords: 'Progressive Web App, PWA, Aplicaciones web, Aplicaciones nativas, Aplicaciones hibridas'
date: '2023-01-25'
lastMod: '2023-01-25'
featuredImage: '/images/posts/progressive-web-app-diferentes-dispositivos.png'
featuredImageAlt: 'Progressive Web App en diferentes dispositivos'
authorName: 'Daniel Alexis Gonzalez Perez'
authorImage: 'https://avatars.githubusercontent.com/u/54653600?v=4'

---

## Que es una Progressive Web App (PWA)

Las progressive Web apps o aplicaciones web progresivas son llamadas así ya que mediante ellas se le proporciona al usuario una nueva forma de aplicaciones basadas en los estándares y lenguajes de la web, es decir, una fusión entre un sitio web y una aplicación nativa, dando como resultado un sitio web que a diferencia de las páginas web tradicionales es capaz de funcionar como una aplicación nativa en tu dispositivo móvil o tableta.

### ¿Que ventajas tiene una Progressive Web App?

Las Progressive Web Apps tienen muchas ventajas, entre ellas podemos mencionar:

- **Ahorro de espacio:** Las Progressive Web Apps no ocupan demasiado espacio en tu dispositivo, ya que no se descargan como una aplicación nativa almacenando todo en tu celular. En comparación con una aplicación normal esta puede pesar hasta 90% menos.

- **Actualizaciones automáticas:** Las Progressive Web Apps se actualizan automáticamente, por lo que no tienes que preocuparte por actualizarlas manualmente.

- **Instalacion facil:** Estas se pueden ejecutar desde tu navegador o instalarse en tu dispositivo de forma rápida y sencilla sin necesidad de ocupar una tienda de aplicaciones.

- **Ejecucion en segundo plano:** Son capaces de ejecutarse en el dispositivo en segundo plano a pesar de no ser una aplicacion nativa, por lo cual, puedes recibir notificaciones y mensajes sin tener que estar en la aplicación.

- **Funcionamiento sin conexion:** Pueden ser ejecutadas sin internet a pesar de ser un sitio web. Esto se logra gracias a la tecnología Service Worker que permite almacenar en caché los archivos necesarios para que la aplicación funcione.

- **Compatibilidad:** No importa desde el dispositivo que accedas, se adaptan a todo dispositivo movil y tableta sin importar su sistema operativo.

### ¿Que desventajas tiene una Progressive Web App?

Las Progressive Web Apps tienen algunas desventajas, entre ellas podemos mencionar:

- **Funcionamiento limitado:** A pesar de que en la actualidad las Progressive Web Apps ya son bastante completas, aun no son capaces de acceder a todas las funcionalidades de un dispositivo móvil o tableta.

- **Velocidad:** El tiempo de carga de una Progressive Web App puede llegar a ser mas lenta que una aplicacion nativa. ya que al ser un sitio web, esta corre a través de un navegador y no directamente en el dispositivo.

- **Soporte de navegadores:** Si bien la mayoria de los navegadores ya soportan las Progressive Web Apps, versiones antiguas de estos pueden no ser compatibles. Por lo que es necesario tener en cuenta que no todos los navegadores soportan las Progressive Web Apps. Si al momento de leer este articulo deseas saber la compatibilidad de los navegadores con las Progressive Web Apps, puedes consultar el siguiente enlace [Can i use "PWA"](https://caniuse.com/?search=PWA).

- **Publicacion en tiendas de aplicaciones:** A pesar de que las Progressive Web Apps pueden ser instaladas en tu dispositivo, en la actualidad aun no pueden ser publicadas en tiendas de aplicaciones como Google Play o App Store.


## Como funciona una Progressive Web App

Las Progressive Web Apps en realidad son sitios web que se comportan como aplicaciones nativas, por lo que para que una Progressive Web App funcione debemos de tener en cuenta que debe de contar con los siguientes elementos:

- **Conexion HTTPS:** Como ya mencionamos anteriormente, es necesario que nuestro sitio web cuente con conexion HTTPS para que las Progressive Web Apps puedan funcionar correctamente. Sin esto no podremos acceder a ciertas funcionalidades como la geolocalizacion, transacciones seguras o los service workers (ejemplo: cache).

- **Service Workers:** Los service workers son scripts que tienen como objetivo permitir funcionalidades offline y funciones en segundo plano. Lo que hacen es interceptar las peticiones de red y almacenarlas en cache para que puedan ser utilizadas cuando no haya conexion a internet, esto permite que las Progressive Web Apps puedan funcionar sin conexion a internet.

- **Archivo Manifest.json:** Este archivo es fundamental a la hora de crear una PWA, sin el, nuestro navegador no reconocera a nuestro sitio web como una Progressive Web App. En el se provee la informacion necesaria para que el navegador pueda mostrar nuestra web app como una aplicacion nativa. A continuacion te mostramos un ejemplo de un archivo manifest.json:

```json
//Manifest tomado de la aplicacion web de js13kPWA
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Aplicación web progresiva que enumera los juegos enviados a la categoría del marco A en la competencia js13kGames del 2017.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

Como puedes ver, algunos de los valores que contiene el archivo manifest.json son: nombre con el que aparecera en el dispositivo, autor, icono de la pagina web en diferentes resoluciones, version, descripcion y entre otras mas que puedes ver en la documentacion oficial de MDN Web Docs: [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest).

Una vez que tenemos nuestro archivo manifest.json en la raiz de nuestro proyecto, debemos de llamarlo en el head de nuestro index.html de la siguiente manera:

```html
<link rel="manifest" href="manifest.json">
```

de esta manera nuestro navegador ya reconocera a nuestra web app como una Progressive Web App.

**Conclusion**

Esperamos y encuentres este articulo util. 👍 si deseas conocer un poco mas acerca de las PWA puedes visitar la documentacion de MDN Web Docs: [Progressive Web Apps](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps#documentación).
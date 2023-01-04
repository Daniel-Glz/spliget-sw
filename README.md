## Spliget SW Blog

Este es el repositorio del blog de Spliget SW.

### ¿Cómo funciona?

El blog está creado con Next.js y WordPress. La idea es que el blog sea un sitio estático, pero que este se actualize cada que se cree, edite o elimine contenido. Para ello, se usa el plugin [WPGraphQL](https://www.wpgraphql.com/) el cual nos proporciona un endpoint donde podemos hacer peticiones GraphQL a Wordpress. Con esto, se puede crear un script que se ejecute cada cierto tiempo y que actualice el contenido del blog.

### Comandos basicos de Next.js

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción del sitio estático
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter de código
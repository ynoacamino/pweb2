# Documentación del Proyecto

## Descripción

Este es un servidor simple de Node.js que utiliza Express.js. El servidor está configurado para escuchar en el puerto 3000 y tiene una ruta `/list` que devuelve una lista de enlaces a tres archivos Markdown.

## Código

```javascript
// Importamos el módulo Express
const express = require('express');

// Creamos una nueva aplicación Express
const app = express();

// Definimos la ruta '/list'
app.get('/list', (request, response) => {
  response.send(`
    <ul>
      <li><a href="/primero.md">Markdown 1</a></li>
      <li><a href="/segundo.md">Markdown 2</a></li>
      <li><a href="/tercero.md">Markdown 3</a></li>
    </ul>
  `);
})

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000/')
})


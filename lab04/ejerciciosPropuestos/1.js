const express = require('express');
const Markdown = require('markdown-it');
const fs = require("node:fs");
const { request } = require('node:http');
const path = require("node:path")
const bodyParser = require('body-parser');

const md = new Markdown();

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
  response.send('Hola mundo');
})

app.get('/list', (request, response) => {
  response.send(`
    <ul>
      <li><a href="/primero.md">Markdown 1</a></li>
      <li><a href="/segundo.md">Markdown 2</a></li>
      <li><a href="/tercero.md">Markdown 3</a></li>
    </ul>
  `);
})

app.get('/html', (request, response) => {
  fs.readFile(path.join(__dirname, "public", "primero.md"), {encoding: "utf-8"}, (err, data) => {
    if (err) {
      response.send("Error al leer el archivo");
      return;
    }

    const htmlCode = md.render(data);

    response.send(htmlCode);
  })
})

app.get('/upload', (request, response) => {
  response.sendFile(path.join(__dirname, "public", "upload.html"));
});
app.post("/upload", async (request, response) => {
  const body = request.body;

  const { title, content } = body;

  fs.writeFile(path.join(__dirname, "public", title + ".md"), content, (err) => {
    if (err) {
      response.send("Error al guardar el archivo");
      return;
    }

    response.send(`Archivo guardado correctamente visitelo <a href='/${title}.md'>aqui</a>`);
  })

});


app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000/')
})



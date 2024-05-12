function aumentarTexto() {
  var texto = document.getElementById('texto');
  var fontSize = window.getComputedStyle(texto, null).getPropertyValue('font-size');
  var currentSize = parseFloat(fontSize);
  texto.style.fontSize = (currentSize + 2) + 'px';
}

function disminuirTexto() {
  var texto = document.getElementById('texto');
  var fontSize = window.getComputedStyle(texto, null).getPropertyValue('font-size');
  var currentSize = parseFloat(fontSize);
  texto.style.fontSize = (currentSize - 2) + 'px';
}

function cambiarColor() {
  var texto = document.getElementById('texto');
  var color = texto.style.color;
  texto.style.color = (color === 'black') ? 'red' : 'black';
}
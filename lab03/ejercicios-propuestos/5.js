document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  var cantidad = parseInt(document.getElementById('cantidad').value);
  generarTabla(cantidad);
});

function generarTabla(cantidad) {
  var tabla = '<table>';
  tabla += '<tr><th>Valores</th></tr>';
  for (var i = 0; i < cantidad; i++) {
    var valor = Math.floor(Math.random() * 100) + 1; // Generar valores aleatorios entre 1 y 100
    tabla += '<tr><td>' + valor + '</td></tr>';
  }
  tabla += '</table>';
  document.getElementById('tabla-container').innerHTML = tabla;
  document.getElementById('calcular-suma').style.display = 'inline';
}

document.getElementById('calcular-suma').addEventListener('click', function() {
  var valores = document.querySelectorAll('#tabla-container td');
  var suma = 0;
  valores.forEach(function(valor) {
    suma += parseInt(valor.textContent);
  });
  document.getElementById('resultado').textContent = 'La suma de los valores es: ' + suma;
});
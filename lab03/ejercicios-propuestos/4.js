const $input = document.getElementById('input');
const $resultado = document.getElementById('resultado');
const $btn = document.getElementById('btn');

// https://meet.google.com/vse-mazk-gqf

$btn.addEventListener('click', () => {
  const index = $input.value.indexOf('.com/');

  if (index === -1) {
    $resultado.textContent = "Ingresa una URL válida.";
    return;
  }

  const result = $input.value.slice(index + 5).split("-").join("");

  $resultado.textContent = result;
});

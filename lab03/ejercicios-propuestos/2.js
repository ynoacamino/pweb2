const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
  const $input = document.getElementById('texto-original');
  const $output = document.getElementById('texto-modificado');
  const value = $input.value;
  const result = value.split('').reverse().join('');
  $output.textContent = result;
});

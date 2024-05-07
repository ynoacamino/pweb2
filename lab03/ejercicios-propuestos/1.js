function fecha(num) {
  if (num < 0 || num > 6) {
    return 'No existe un día de la semana con ese número';
  }

  const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
  }
  return dias[num];
}

console.log(fecha(0)); // Domingo
console.log(fecha(6)); // Sabado

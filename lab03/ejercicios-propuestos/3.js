const $dias = document.getElementById('dias');

const FECHA_ACTUAL = new Date();

const DIA_DE_AREQUIPA = new Date(FECHA_ACTUAL.getFullYear(), 8, 15);


const DIFERENCIA = DIA_DE_AREQUIPA - FECHA_ACTUAL;

const DIAS = Math.floor(DIFERENCIA / (1000 * 60 * 60 * 24));

$dias.textContent = DIAS;
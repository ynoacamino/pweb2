const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    
    const regionesExcluidas = ['Lima', 'Callao'];
    const regionesFiltradas = json.filter(region => !regionesExcluidas.includes(region.region));

    const datos = regionesFiltradas.map(region => {
      const confirmados = region.confirmed.map(entry => Number(entry.value));
      return { nombre: region.region, confirmados: confirmados };
    });

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(() => drawChart(datos));

    function drawChart(datos) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Días');
      

      datos.forEach(region => {
        data.addColumn('number', region.nombre);
      });

      const maxLength = datos.reduce((max, region) => Math.max(max, region.confirmados.length), 0);

      const rows = [];
      for (let i = 0; i < maxLength; i++) {
        const row = [i];
        datos.forEach(region => {
          row.push(region.confirmados[i] || null);
        });
        rows.push(row);
      }
      data.addRows(rows);

      var options = {
        hAxis: {
          title: 'Días'
        },
        vAxis: {
          title: 'Confirmados'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
  }
}

xhr.send();


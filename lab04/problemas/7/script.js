$(document).ready(function(){
  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', 'http://localhost:8000/data', true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const json = JSON.parse(xhr.responseText);
      const regiones = json.map(region => region.region);

      const $region1Select = $('#region1');
      const $region2Select = $('#region2');

      regiones.forEach(region => {
        $region1Select.append(`<option value="${region}">${region}</option>`);
        $region2Select.append(`<option value="${region}">${region}</option>`);
      });

      $region1Select.add($region2Select).change(function() {
        const region1 = $region1Select.val();
        const region2 = $region2Select.val();
        drawChart(json, region1, region2);
      }).change(); 
    }
  }

  xhr.send();

  function drawChart(json, region1, region2) {
    const lima = json.find(region => region.region === region1);
    const callao = json.find(region => region.region === region2);

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(function() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Días');
      data.addColumn('number', region1);
      data.addColumn('number', region2);

      const rows = [];
      const maxLength = Math.max(lima.confirmed.length, callao.confirmed.length);
      for(let i = 0; i < maxLength; i++) {
        const row = [i];
        row.push(Number(lima.confirmed[i]?.value || 0));
        row.push(Number(callao.confirmed[i]?.value || 0));
        rows.push(row);
      }

      data.addRows(rows);

      var options = {
        hAxis: {
          title: 'Tiempo'
        },
        vAxis: {
          title: 'Infectados'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    });
  }
});
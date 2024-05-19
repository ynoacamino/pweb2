const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    
    const lima = json.find((region) => region.region === 'Lima');
    const callao = json.find((region) => region.region === 'Callao');

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Lima');
      data.addColumn('number', 'Callao');

      const rows = [];
      for(let i = 0; i < lima.confirmed.length; i += 1) {
        const row = [i];
        row.push(Number(lima.confirmed[i].value));
        row.push(Number(callao.confirmed[i].value));
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
    }
  }
}

xhr.send();



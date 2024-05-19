const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    
    const arequipa = json.find((region) => region.region === 'Arequipa');

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Arequipa');

      data.addRows(arequipa.confirmed.map((confirmed, index) => [index, Number(confirmed.value)]));

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



const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    
    const noLimaCallao = json.filter((region) => region.region !== 'Lima' && region.region !== 'Callao');

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
 
      noLimaCallao.forEach((region) => {
        data.addColumn('number', region.region);
      })

      const rows = [];
      for(let i = 0; i < noLimaCallao[0].confirmed.length; i += 1) {
        const row = [i];
        noLimaCallao.forEach((region) => {
          row.push(Number(region.confirmed[i].value));
        })
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



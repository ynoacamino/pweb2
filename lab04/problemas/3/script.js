const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    const regionSumas = [];
    for (const region of data) {
      let totalConfirmados = 0;
      for (const confirmado of region.confirmed) {
        totalConfirmados += parseInt(confirmado.value);
      }
      regionSumas.push({ region: region.region, total: totalConfirmados });
    }

    regionSumas.sort((a, b) => b.total - a.total);

    for (let i = 0; i < 10; i++) {
      const $region = document.createElement('div');
      $region.textContent = `${i + 1}. ${regionSumas[i].region}: ${regionSumas[i].total} confirmados`;
      $container.appendChild($region);
    }
  }
}

xhr.send();
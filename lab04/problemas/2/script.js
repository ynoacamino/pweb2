const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    for (const region of data) {
      const $region = document.createElement('div');

      let totalConfirmados = 0;
      for (const confirmado of region.confirmed) {
        totalConfirmados += parseInt(confirmado.value);
      }

      $region.textContent = `${region.region}: ${totalConfirmados} confirmados`;
      
      $container.appendChild($region);
    }
  }
}

xhr.send();
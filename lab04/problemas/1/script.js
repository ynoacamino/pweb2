const $container = document.getElementById('container');

const xhr = new XMLHttpRequest(); 

xhr.open('GET', 'http://localhost:8000/data', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const json = JSON.parse(xhr.responseText);
    json.forEach((region) => {
      const $region = document.createElement('div');
      $region.textContent = region.region;
      $container.appendChild($region);
    })
  }
}

xhr.send();

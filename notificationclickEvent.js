
  console.log('se dispara al hacer click en push');

  fetch('https://api.github.com/users/manishmshiva')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request Failed', err));
 
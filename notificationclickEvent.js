console.log("hello");

const notificationClickEvent = (event) => {
  console.log('se dispara al hacer click en push');

  console.log(event);

  fetch('https://api.github.com/users/manishmshiva')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request Failed', err));
}
  
 
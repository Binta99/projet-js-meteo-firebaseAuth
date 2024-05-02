const apiKey = '77752c8dff0281990e64fa3d908d5972';
const apicall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector('#ville').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
          '<i class="fa-solid fa-temperature-half"></i> ' +
          data.main.temp +
          ' °C ';
        document.querySelector('#humidity').innerHTML =
          '<i class="fa-solid fa-droplet"></i> ' + data.main.humidity + ' %';
        document.querySelector('#wind').innerHTML =
          '<i class="fa-solid fa-wind"></i> ' + data.wind.speed + ' km/h ';
      })
    )
    .catch((err) => console.log('erreur' + err));
};
// click sur le formulaire
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;
  apicall(ville);
});
// appel par defaut au chargemeent de la page
apicall('Dakar');

var inputValue = document.querySelector(".inputValue");
var button = document.querySelector(".button");
var cityName = document.querySelector(".cityName");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var feelsLike = document.querySelector(".feelsLike");

button.addEventListener("click", function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&units=metric&appid=854ba8fe93319bd9fe611133fa3f4329"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue =
        data["weather"][0]["description"].charAt(0).toUpperCase() +
        data["weather"][0]["description"].toLowerCase().slice(1);
      var feelsLikeValue = data["main"]["feels_like"];

      cityName.innerHTML = nameValue;
      desc.innerHTML = `Description: ${descValue}`;
      temp.innerHTML = `Temperature: ${tempValue}°`;
      feelsLike.innerHTML = `Feels Like: ${feelsLikeValue}°`;
    })

    .catch((err) => alert("Invalid City Name"));
});

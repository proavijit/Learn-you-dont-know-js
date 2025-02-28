


    
    const getWeather = () => {
      
      let cityName = document.getElementById('inFild').value.toLowerCase().toString();

  let apiURL =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d60857ea4aa9ad5a7f89f2cb06d822da`
  fetch(apiURL)

	.then(response => response.json())
	.then(data => {

    document.getElementById('errorID').innerText = data.message;

    console.log(data.message);


    let {
      feels_like,
      grnd_level,
      humidity,
      pressure,
      sea_level,
      temp,
      temp_max,
      temp_min
    
    } = data.main

  let mainData = `
    <div class="container">
        <h2>City Name: ${data.name}, Country Name: ${data.sys.country}</h2>
        <ul>
            <li>Feels Like: ${feels_like}</li>
            <li>Ground Level: ${grnd_level}</li>
            <li>Humidity: ${humidity}</li>
            <li>Pressure: ${pressure}</li>
            <li>Sea Level: ${sea_level}</li>
            <li>Temperature: ${temp}</li>
            <li>Max Temperature: ${temp_max}</li>
            <li>Min Temperature: ${temp_min}</li>
        </ul>
    </div>
`;


    document.getElementById('DataShow').innerHTML = mainData;
    
    document.getElementById('inFild').value = '';
   

  })
	.catch(err => {
    console.log(err);
  });

console.log(cityName);




  console.log("Button");
}


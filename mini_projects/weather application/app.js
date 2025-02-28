


let getWeather = () => {
      
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
    
    } = data.main;

    let countryName = data.sys.country;
 
  let mainData = `
    <div class="container">
        <h2>City Name: ${data.name}, Country Name: ${countryCodeFunc(countryName)}</h2>
        <div> ${flagFunction(countryName)} </div>  
        
        <ul>
        <li>Description: ${data.weather[0].description}</li>
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

}


let flagFunction = (name) => {
  let flagUrl = `https://flagsapi.com/${name}/flat/64.png`;
  let imagesFlag = ` <img id="flag" src="${flagUrl}" alt="Country Flag" />`
  
  return imagesFlag;
}




const countryCodeFunc = (countryName) => {
const countryCode = `https://restcountries.com/v3.1/alpha/${countryName}`;
fetch(countryCode)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));

}
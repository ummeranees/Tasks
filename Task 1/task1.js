

var input = document.querySelector('.input_text');
var Temperature = document.querySelector('.Temperature');
var Pressure = document.querySelector('.Pressure');
var Humidity = document.querySelector('.Humidity');
var Visibility = document.querySelector('.Visibility');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e15917f171999d15fdca6896910c59fc')
.then(response => response.json())
.then(data => {
  var TemperatureValue = data[''];
  var PressureValue = data[''];
  var HumidityValue = data[''];
  var VisibilityValue=data[''];

  Temperature.innerHTML=TemperatureValue;
  Pressure.innerHTML=PressureValue;
  Humidity.innerHTML=HumidityValue;
  Visibility.innerHTML=VisibilityValue;

 
})

.catch(err => alert("Wrong city name!"));
})
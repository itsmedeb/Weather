const cityForm = document.querySelector('.change-location')
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const updateUI = (data) =>
{
   const cityDetails = data.cityDetails;
   const weather = data.weather[0];

   //update details template
   details.innerHTML = `
   <h2 class="my-2">${cityDetails.EnglishName}</h2>
   <div class="my-2">${weather.WeatherText}</div>
   <div class="display-4 my-3">
       <span>${weather.Temperature.Metric.Value}</span>
       <span>&deg;C</span>
   </div>
   `;
   //update the icons
    const iconSource = `img/icons/${weather.WeatherIcon}.svg`
   icon.setAttribute('src' , iconSource);

   //update the day/night image
   let timeSource = null;
   timeSource = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

   time.setAttribute('src' , timeSource);
   //remove d-none class if present
   if(card.classList.contains('d-none'))
   {
       card.classList.remove('d-none');
   }
};
const updateCity = async (city) =>
{
   const cityDetails = await getCity(city);
   const weather = await getWeather(cityDetails.Key); 

   return { cityDetails , weather};//object shorthand notation
    
   
};
cityForm.addEventListener('submit' , e =>
{
   e.preventDefault();

   const city = cityForm.city.value.trim();
   cityForm.reset();

   updateCity(city).then(data => updateUI(data))
   .catch(err => console.log(err));

   //adding city to local storage
   localStorage.setItem('city' , city);
});

if(localStorage.getItem('city'))
{
   console.log(localStorage.getItem('city'));
   updateCity(localStorage.getItem('city'))
   .then(data => updateUI(data))
   .catch(err => console.log(err));
}
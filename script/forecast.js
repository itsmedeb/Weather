const key = 'DNMyB7TGEK5TLFbTelEA6AG0L5C0g1hs';

//get weather information
const getWeather = async (locationKey) =>
{
   const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
   const query = `${locationKey}?apikey=${key}`;

   const response = await fetch(base+query);
   const data = await response.json();

   return data;
};


//Getting the city information
const getCity = async (city) =>
{
    
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

     return data[0];
};

// const city = 'Kolkata';

// getCity(city).then(data => {
//     return getWeather(data.Key);
// }).then(data => 
//     {
//         console.log(data);
//     })
//     .catch(error => console.log(error));


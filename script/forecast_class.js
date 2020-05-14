class Forecast 
{
    constructor() 
    {
        this.key = 'DNMyB7TGEK5TLFbTelEA6AG0L5C0g1hs';
        this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.CityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    
 async updateCity(city)
    {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key); 
        return { cityDetails , weather};//object shorthand notation
    };

    //Getting the city information
 async getCity(city)
    {
        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.CityURL+query);
        const data = await response.json();

        return data[0];
    };

 async getWeather(locationKey)
    {
       const query = `${locationKey}?apikey=${this.key}`;
    
       const response = await fetch(this.weatherURL+query);
       const data = await response.json();
    
       return data;
    };
}
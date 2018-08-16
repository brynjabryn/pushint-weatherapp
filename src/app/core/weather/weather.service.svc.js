angular.module('core.weather').factory('weatherSvc', [
  function() {
    let cachedWeather = {};
    let decorateWeather;
    let getWeatherByLocation;

    decorateWeather = function(respone) {
      let decoratedWeather = {
        cid: respone.city.id,
        name: respone.city.name,
        coordinates: { lat: respone.city.coord.lat, lon: respone.city.coord.lon },
        today: {
          day: new Date(respone.list[0].dt * 1000),
          temp: respone.list[0].temp.day,
          weather: respone.list[0].weather[0].main,
          description: respone.list[0].weather[0].description,
          img: 'https://openweathermap.org/img/w/' + respone.list[0].weather[0].icon + '.png'
        },
        upcoming: respone.list.slice(1).map(day => {
          return {
            day: new Date(day.dt * 1000),
            temp: day.temp.day,
            weather: day.weather[0].main,
            description: day.weather[0].description,
            img: 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png'
          };
        })
      };

      cachedWeather[`${decoratedWeather.coordinates.lat}_${decoratedWeather.coordinates.lon}`] = decoratedWeather;

      return decoratedWeather;
    };

    getWeatherByLocation = function(location) {
      return cachedWeather[location];
    };

    return {
      decorateWeather: decorateWeather,
      getWeatherByLocation: getWeatherByLocation
    };
  }
]);

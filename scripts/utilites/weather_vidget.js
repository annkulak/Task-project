let cityWeather = 'Rome,IT';

function createWeatherVidgetIntarface() {
    const weather = document.createElement('div');
    document.querySelector('.weather-vidget').append(weather);
    weather.id = `mini-weather`;

    const cityBlock = document.createElement('div');
    weather.append(cityBlock);
    cityBlock.classList.add('weather-city-block');

    const city = document.createElement('div');
    cityBlock.append(city);
    city.classList.add('weather-city');
    city.innerHTML = `${cityWeather}`;

    const description = document.createElement('div');
    cityBlock.append(description);
    description.classList.add('weather-description');

    const temperatureBlock = document.createElement('div');
    weather.append(temperatureBlock);
    temperatureBlock.classList.add('weather-temperature-block');

    const temperature = document.createElement('div');
    temperatureBlock.append(temperature);
    temperature.classList.add('temperature');

    const minmaxTemperatures = document.createElement('div');
    temperatureBlock.append(minmaxTemperatures);
    minmaxTemperatures.classList.add('min-max-temperatures');

    const minTemperature = document.createElement('div');
    minmaxTemperatures.append(minTemperature);
    minTemperature.classList.add('min-temperature');

    const maxTemperature = document.createElement('div');
    minmaxTemperatures.append(maxTemperature);
    maxTemperature.classList.add('max-temperature');
};

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&lang=en&appid=080fb96bdec6fda31fac5edf75301ee4&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    const temperature = document.querySelector('.temperature');
    const minTemperature = document.querySelector('.min-temperature');
    const maxTemperature = document.querySelector('.max-temperature');
    const weatherDescription = document.querySelector('.weather-description');

    temperature.textContent = `${data.main.temp}°C`;
    minTemperature.textContent = `min - ${data.main.temp_min}°C`;
    maxTemperature.textContent = `max - ${data.main.temp_max}°C`;
    weatherDescription.textContent = data.weather[0].description;
};

function getWeatherVidget() {
    createWeatherVidgetIntarface();
    getWeather();
};

export { getWeatherVidget };
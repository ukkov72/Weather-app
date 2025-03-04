import * as readline from 'readline';
import { getWeather } from './weatherService';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptForCity = () => {
  rl.question('Enter a city name to get the weather: ', async (city) => {
    const weatherData = await getWeather(city);

    if (weatherData) {
      const { name, sys, main, weather } = weatherData;
      console.log(`Weather in ${name}, ${sys.country}:`);
      console.log(`Temperature: ${main.temp}°C`);
      console.log(`Humidity: ${main.humidity}%`);
      console.log(`Pressure: ${main.pressure} hPa`);
      console.log(`Description: ${weather[0].description}`);
    } else {
      console.log('Could not fetch weather data.');
    }

    rl.close();
  });
};

promptForCity();

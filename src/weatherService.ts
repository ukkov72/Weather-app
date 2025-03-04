import axios from 'axios';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

if (!API_KEY) {
  console.error('API key is missing.');
  process.exit(1);
}

export interface WeatherResponse {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  name: string;
  sys: {
    country: string;
  };
}

export const getWeather = async (city: string): Promise<WeatherResponse | null> => {
  try {
    const response = await axios.get<WeatherResponse>(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'  // Use 'imperial' for Fahrenheit
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

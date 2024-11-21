import { Response } from '@/types/weather';

export const WeatherApi = {
  getWeatherByCity: async (city: string): Promise<Response> => {
    const baseUrl = process.env.WEATHER_API_CLIENT;
    const apiKey = process.env.WEATHER_API_KEY;

    const res = await fetch(
      `${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    const response = await res.json();

    if(!res.ok){
      throw new Error(response.message);
    }

    return response;
  },
  getForecastWeather: async (city : string): Promise<Response> => {
    const baseUrl = process.env.WEATHER_API_CLIENT;
    const apiKey = process.env.WEATHER_API_KEY;

    const res = await fetch(
      `${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`,
    );

    const response = await res.json();

    if(!res.ok){
      throw new Error(response.message);
    }

    return response;
  }
};

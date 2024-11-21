import { Response } from '@/types/weather';
import { WeatherApi } from '@/utils/api';
import { loadFromLocalStorage, saveToLocalStorage } from '@/utils/storage';
import { create } from 'zustand';

interface WeatherStore {
  weather: Response | null;
  forecast: any;
  error: string | null;
  loading: boolean;
  fetchWeather: (city: string) => Promise<void>;
  fetchForecast: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherStore>((set: any) => ({
  weather: null,
  forecast: null,
  error: null,
  loading: false,

  fetchWeather: async (city: string) => {
    const localData = loadFromLocalStorage('weather');
    if (!localData || localData.weather.name !== city) {
      set({ loading: true, error: null });
      try {
        const data = await WeatherApi.getWeatherByCity(city);

        saveToLocalStorage('weather', data);
        set({ weather: data });
      } catch (error: any) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    } else {
      set({ weather: localData, loading: false });
    }
  },
  fetchForecast: async (city: string) => {
    set({ loading: true, error: null });
    const localForecast = loadFromLocalStorage('forecast');
    if (!localForecast || city !== localForecast.city.name) {
      try {
        const data = await WeatherApi.getForecastWeather(city);
        saveToLocalStorage('forecast', data);
        set({ forecast: data });
      } catch (error: any) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    } else {
      set({ forecast: localForecast, loading: false });
    }
  },
}));

import Header from '@/components/Header';
import CurrentWeather from '@/components/CurrentWeather';
import Forecast from '@/components/Forecast';
import DetailWeather from '@/components/DetailWeather';
import { useWeatherStore } from '@/stores/weather-store';
import { useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '@/utils/storage';
import Notification from '@/components/Notification';
import { useThemeStore } from '@/stores/theme-store';

export default function Home() {
  const { error, fetchWeather, fetchForecast } = useWeatherStore();
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    const lastSearchedCity = loadFromLocalStorage('search-city') || 'Jakarta';

    fetchWeather(lastSearchedCity);
    fetchForecast(lastSearchedCity);
  }, [fetchWeather, fetchForecast]);

  const handleSearch = (city: string) => {
    fetchWeather(city);
    fetchForecast(city);
    saveToLocalStorage('search-city', city);
  };

  return (
    <div
      className={`min-h-screen  p-4 md:p-6 ${
        isDarkMode ? 'dark' : 'bg-slate-50'
      }`}>
      <div className={`mx-auto max-w-4xl bg-slate-50 text-black dark:bg-black`}>
        <Header handleSearch={handleSearch} />
        {error && <Notification message={error} type="error" />}
        <CurrentWeather />
        <Forecast />
        <DetailWeather />
      </div>
    </div>
  );
}
